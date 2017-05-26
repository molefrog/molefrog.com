import React, { Component } from 'react'

import TopBar from 'components/TopBar'

const Content = () =>
  <div>
    <section className="about">
      <div className="about__name">
        Лёша Тактаров
      </div>

      <h1 className="about__header">
        Full-Stack разработчик и дизайнер.
      </h1>

      <div className="about__description">
        <div className="about__text about__text--two-columns">
          <div className="about__column">
            <p>
              Живу программированием, а удовольствие получаю от его применения
              на стыке областей. Принцип «сложные вещи должны быть простыми и интересными»
              находит отражение в моих проектах.
            </p>
            <p>
              Пишу код на Руби и JavaScript, а мой ежедневный набор:
              <b> Rails, React, Redux, Redux Saga</b> и <b>D3</b>.
              Начинал как разработчик на Си и Ассемблере, получив бесценный опыт.
            </p>
          </div>

          <div className="about__column">
            <p>
              Проектирую, рисую и программирую интерфейсы.
              Веду свои проекты и помогаю бизнесам запускать веб-продукты:
              от дизайна и написания текстов до управления разработкой и DevOps.
            </p>

            <p>
              <span
                className="reference reference--inline"
                data-image="/showcase/talking.gif">
                Свободно разговариваю
              </span>
              &thinsp;и веду переговоры на английском. Люблю&thinsp;
              <span
                className="reference reference--inline"
                data-image="/showcase/wife-and-cats.jpg"
                data-preview-mode="cats">
                жену, кошек
              </span> и документальные фильмы.
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


    <article className="project">
      <h2 className="project__header">These Guys</h2>
      <div className="about__description about__description--project">
        <div className="about__text about__text--two-columns">
          <div className="about__column">
            <p>Занимаюсь разработкой проектов в небольшой команде <a className="reference reference--inline" data-video="/showcase/these-guys.mp4" href="http://theseguys.io">These Guys</a> в паре со своим хорошим другом Тихоном.
            </p>
          </div>
          <div className="about__column">
            <p>Специализируемся на сложных веб-проектах или небольших MVP-решениях.</p>
          </div>
        </div>
      </div>
    </article>

    <article className="project">
      <h2 className="project__header">Сообщество Code Hipsters</h2>
      <div className="about__description about__description--project">
        <div className="about__text about__text--two-columns">
          <div className="about__column">
            <p>
              Мы с друзьями в 2014 году основали ИТ-тусовку&thinsp;
              <a
                className="reference reference--inline"
                data-video="/showcase/ch-website.mp4"
                href="http://codehipsters.com">
                Code Hipsters
              </a>
              &thinsp;чтобы
              разбавить атмосферу традиционных митапов в Ростове-на-Дону. Быстро нашли
              подходящий формат —&thinsp;
              <a
                className="reference reference--inline"
                data-image="/showcase/ch-vk.jpg"
                href="https://vk.com/codehipsters">
                паблик в социальных сетях
              </a>
              &thinsp;о трендах фронтенд-разработки.
              Контент — интриги сообщества в привычном нам формате: с иронией и восхищением.
            </p>
            <p>
              Провели несколько уютных мероприятий и регулярно выезжаем на конференции —
              для обмена опытом с другими сообществами.
            </p>
          </div>
          <div className="about__column">
            <p>
              В постах мы делаем отсылки к комиксам, культовым фильмам и классическим произведениям искусства.
              И не случайно: мы считаем, что сообщество должно отражать стиль и быть противопоставлено <span className="reference reference--inline" data-image="/showcase/it-guy.gif">стереотипному образу</span> ИТ-специалиста.
            </p>
            <p>
              Победили в хакатоне с
              проектом <a className="reference reference--inline" data-image="/showcase/ficus-site.jpg" href="http://ficus.io">Фикус</a>, в котором я
              занимался разработкой <span className="reference reference--inline" data-video="/showcase/ficus-stars.mp4">интерактивов</span> — <span className="reference reference--inline" data-video="/showcase/ficus-poll.mp4">опросов</span> и
              визуализаций в реальном времени на слайдах.
            </p>
          </div>
        </div>
      </div>
    </article>
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
