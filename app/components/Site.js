import React, { Component } from 'react'

import TopBar from 'components/TopBar'

const Content = () =>
  <div>
    <section className="about">
      <div className="about__name">
        Лёша Тактаров
      </div>

      <h1 className="about__header">
        Разработчик и дизайнер.
      </h1>

      <div className="about__description">
        <div className="about__text about__text--two-columns">
          <div className="about__column">
            <p>
              Привет, это Лёша! 👋 Я занимаюсь веб-продуктами: рисую и программирую интерфейсы,
              разрабатываю бекенд и управляю разработкой.
            </p>

            <p>
              Я помогаю бизнесам быстро стартануть, протестировать идею и масштабироваться, а также веду свои проекты:
              работаю над
              сервисом <a className="reference reference--inline"
              data-video="/showcase/resume-io-sections.mp4"  href="https://resume.io">resume.io</a> в качестве CTO
              и кофаундера.
            </p>

            <p>
              Начинал как системный разработчик на Си и Ассемблер, поэтому неплохо разбираюсь в построении эффективных 🚀 сетевых
              приложений. Сейчас мой ежедневный набор — это <b>Ruby</b> и <b>JavaScript</b> (Rails/React/Redux и другие
              проверенные инструменты).
            </p>
            <p>
              Кроме этого, я обожаю придумывать и делать <span className="reference reference--inline" data-video="/showcase/ficus-stars.mp4">интерактивы</span>{' '}
              и <span className="reference reference--inline" data-video="/showcase/these-guys.mp4" href="http://theseguys.io">визуализации</span> ✨
              для митапов и конференций (взгляните на наш сайд-проект <a className="reference reference--inline" data-image="/showcase/ficus-site.jpg" href="http://ficus.io">Фикус</a>,
              если вам стало интересно).
            </p>
          </div>

          <div className="about__column">

            <p>
              Основал ИТ-сообщество&thinsp;
              <a
                className="reference reference--inline"
                data-video="/showcase/ch-website.mp4"
                href="http://codehipsters.com">
                Code Hipsters
              </a>. Мы с иронией&thinsp;
              <a
                className="reference reference--inline"
                data-image="/showcase/ch-vk.jpg"
                href="https://vk.com/codehipsters">рассказываем</a>
              &thinsp;об интригах мира современного фронтенда и проводим
              уютные мероприятия.
            </p>

            <p>
              Люблю&thinsp;
              <span
                className="reference reference--inline"
                data-image="/showcase/wife-and-cats.jpg"
                data-preview-mode="cats">
                жену, кошек
              </span> и документальные фильмы.
            </p>

            <p>
              <b>Чем я могу быть полезен?</b><br/>
              Если у вас есть идея для стартапа, но вы не уверены, какой выбрать стек или как начать с минимальными
              техническими вложениями — <a className="reference reference--inline" href="https://t.me/molefrog">напишите мне</a> 👌 или
              позовите прогуляться. Я открыт к сотрудничеству.
            </p>
          </div>
        </div>
      </div>

      <section className="mini-map__section">
        <div className="mini-map__header">Последние активности</div>
        <div className="mini-map">
          <a
            className="mini-map__item reference"
            data-video="/showcase/resume-io-sections.mp4"
            style={{ backgroundImage: "url('/images/resume-thumb.gif')" }}
            href="https://resume.io">
          </a>

          <div
            className="mini-map__item reference"
            data-video="/showcase/dirty-animations.mp4"
            style={{ backgroundImage: "url('/images/dirty-anim-thumb.gif')" }}>
          </div>

          <a
            className="mini-map__item reference"
            data-video="/showcase/redux-actuator.mp4"
            style={{ backgroundImage: "url('/images/actuator-thumb.gif')" }}
            href="https://github.com/molefrog/redux-actuator">
          </a>

          <div
            className="mini-map__item reference"
            data-video="/showcase/laxlabs.mp4"
            style={{ backgroundImage: "url('/images/laxlabs-thumb.jpg')" }}>
          </div>

          <a
            className="mini-map__item reference"
            data-image="/showcase/rails-webpack.jpg"
            style={{ backgroundImage: "url('/images/rails-webpack-thumb.jpg')" }}
            href="https://speakerdeck.com/molefrog/give-a-second-change-to-rails-frontend">
          </a>

          <a
            className="mini-map__item reference"
            data-image="/showcase/date-parse.jpg"
            style={{ backgroundImage: "url('/images/date-parse-thumb.jpg')" }}
            href="https://medium.com/@mlfrg/rules-of-parsing-dates-with-date-parse-c5a73525a72e">
          </a>

          <a
            className="mini-map__item reference"
            data-video="/showcase/smartomato.mp4"
            style={{ backgroundImage: "url('/images/smartomato-thumb.jpg')" }}
            href="http://smartomato.ru">
          </a>

          <a
            className="mini-map__item reference"
            data-video="/showcase/pidnn-talk.mp4"
            style={{ backgroundImage: "url('/images/pidnn-thumb.jpg')" }}
            href="http://molefrog.com/piddn-talk">
          </a>

          <a
            className="mini-map__item reference"
            data-video="/showcase/graphemescope.mp4"
            style={{ backgroundImage: "url('/images/scope-thumb.gif')" }}
            href="http://codepen.io/molefrog/pen/juBad">
          </a>

          <a
            className="mini-map__item reference"
            data-video="/showcase/rye.mp4"
            style={{ backgroundImage: "url('/images/rye-thumb.gif')" }}
            href="http://molefrog.com/rye">
          </a>
        </div>
      </section>
    </section>
  </div>

const Site = () =>
  <div className="site__container">
    <div className="preview" />
    <div className="site__main-layout">
      <main className="site__content">
        <TopBar />
        <Content />
      </main>
    </div>
  </div>


export default Site
