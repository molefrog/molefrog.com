
require('./styles/index.scss')
require('babel-polyfill')
const { Promise } = window

import Velocity from 'velocity-animate'
import dom from 'domtastic'
import raf from 'raf'

import * as most from 'most'

import fromGlobalEvent from 'util/fromGlobalEvent'

const scaleWithAspect = (w, h, base, horizontal = true) => {
  const scale = base / w
  return [ scale * w, scale * h ]
}

class FloatingPreview {
  constructor (reference) {
    this.$reference = dom(reference)

    this.alpha = 0.0
    this.shakeFactor = 4.0
    this.isDestroyed = false

    this.animateShake = this.animateShake.bind(this)

    this.initialize()
  }

  destroy () {
    Velocity(this.$instance,
      { opacity: 0.0 },
      {
        duration: 600,
        easing: [200, 30],
        complete: () => {
          this.$instance.remove()
          this.isDestroyed = true
        }
      })
  }

  animateAppear () {
    const el = this.$instance.get(0)
    if (this.isDestroyed) return

    Velocity(el,
      { opacity: 1.0, translateY: 0 },
      { duration: 900, easing: [ 600, 25 ] })

    this.animateShake()
  }

  shakeFactorCalc () {
    return this.shakeFactor
  }

  animateShake () {
    const el = this.$instance
      .find('.preview__card')

    if (this.isDestroyed) return

    const tt = 8 * this.alpha

    dom(el).css('transform', `
      translateY(${-6 * Math.sin(tt)}px)
      rotateX(${this.shakeFactorCalc() * Math.cos(tt * 2.3)}deg)
      rotateY(${this.shakeFactorCalc() * Math.sin(tt * 4.7)}deg)`)

    this.alpha += 0.01
    this.alpha = this.alpha > 2 * Math.PI ? 0 : this.alpha

    raf(this.animateShake)
  }

  preloadContent () {
    const videoSource = this.$reference.attr('data-video')
    const imageSource = this.$reference.attr('data-image')

    if (imageSource) {
      dom(this.$instance)
        .find('.preview__card')
        .css('background-image', `url(${imageSource})`)

      return Promise.resolve()
    }

    if (videoSource) {
      const $video = dom('<video>')
        .attr('loop', true)
        .attr('src', videoSource)

      dom(this.$instance)
        .find('.preview__card')
        .append($video)

      const video = $video.get(0)
      video.load()

      this.shakeFactor = 0.0

      return new Promise((resolve, reject) => {
        video.addEventListener('canplaythrough', () => {
          const [w, h] = scaleWithAspect(video.videoWidth,
            video.videoHeight, 500)

          $video
            .attr('width', w)
            .attr('height', h)

          this.$instance.find('.preview__card')
            .css({ width: `${w}px`, height: `${h}px` })

          setTimeout(() => video.play(), 400)
          resolve()
        })
      })
    }

    return Promise.reject()
  }

  initialize () {
    this.$instance = dom('<div>')
      .addClass('preview__floating')
      .addClass(`preview__floating--${this.$reference.attr('data-preview-mode')}`)
      .html('<div class="preview__card"></div>')

    Velocity(this.$instance.get(0),
      { opacity: 0, translateY: '200px' },
      { duration: 0 })

    const $parent = dom('.preview')
    $parent.append(this.$instance)

    this.preloadContent().then(() => {
      this.animateAppear()
    })
  }
}

let $lastPreview = null

const onPreviewTrigger = (reference) => {
  if ($lastPreview) {
    $lastPreview.destroy()
    $lastPreview = null
  }

  if (!reference) {
    return
  }

  $lastPreview = new FloatingPreview(reference)
}

const previewFeature = () => {
  const $hovered = most.merge(
    fromGlobalEvent('mouseover', '.reference')
      .map(x => x.target),

    fromGlobalEvent('mouseout', '.reference')
      .constant(null))

  const $debounced = $hovered.debounce(250)

  $debounced.forEach(x => onPreviewTrigger(x))
}

document.addEventListener('DOMContentLoaded', function () {
  previewFeature()
})

