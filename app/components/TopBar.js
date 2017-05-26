import React from 'react'

const TopBar = () =>
  <div className="contacts">
    <div className="contacts__logo" />

    <div className="contacts__column">
      <div className="contacts__line">
        <a className="contacts__link"
          href="/CV Alexey Taktarov.pdf">
          CV in English
        </a>
      </div>

      <div className="contacts__line">
        <a className="contacts__link"
          href="https://telegram.me/molefrog">
          Telegram
        </a>
      </div>
    </div>

    <div className="contacts__column">
      <div className="contacts__line">
        <a className="contacts__link"
          href="mailto:molefrog@gmail.com">
          Email
        </a>
      </div>

      <div className="contacts__line">
        <a className="contacts__link"
          href="https://github.com/molefrog">
          GitHub
        </a>
      </div>
    </div>

    <div className="contacts__column">
      <div className="contacts__line">
        <a className="contacts__link"
          href="http://codepen.io/molefrog/">
          Codepen
        </a>
      </div>

      <div className="contacts__line">
        <a className="contacts__link"
          href="https://speakerdeck.com/molefrog">
          Speaker Deck
        </a>
      </div>
    </div>

    <div className="contacts__column">
      <div className="contacts__line">
        <a className="contacts__link"
          href="https://vk.com/molefrog">
          ВКонтакте
        </a>
      </div>

      <div className="contacts__line">
        <a className="contacts__link"
          href="https://twitter.com/mlfrg">
          Twitter
        </a>
      </div>
    </div>
  </div>

export default TopBar
