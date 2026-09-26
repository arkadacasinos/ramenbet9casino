import './landing.css'

export default function Page() {
  return (
    <div className="rb-shell">
      <a href="#rb-main" className="rb-skip">
        Перейти к содержимому
      </a>

      <header className="rb-topbar" role="banner">
        <div className="rb-topbar-inner">
          <a href="/" className="rb-brand" aria-label="RamenBet — официальный сайт">
            <span className="rb-brand-mark" aria-hidden="true">
              R
            </span>
            <span>RamenBet</span>
          </a>
          <nav className="rb-nav" aria-label="Основная навигация">
            <a href="#rb-about">О проекте</a>
            <a href="#rb-mirror">Зеркало</a>
            <a href="#rb-official">Официальный сайт</a>
            <a href="#rb-casino">Казино</a>
            <a href="#rb-faq">FAQ</a>
          </nav>
          <a href="#rb-cta" className="rb-cta">
            Играть
          </a>
        </div>
      </header>

      <main id="rb-main">
        <section className="rb-hero" aria-labelledby="rb-hero-title">
          <div className="rb-hero-inner">
            <div className="rb-hero-copy">
              <span className="rb-eyebrow">RamenBet — официальный сайт</span>
              <h1 id="rb-hero-title">
                RamenBet казино: рабочее зеркало и официальный сайт для честной игры
              </h1>
              <p>
                RamenBet — это современное онлайн казино с лицензированными слотами, быстрым выводом
                и понятным интерфейсом. Если основной адрес недоступен, мы подготовили рабочее
                зеркало RamenBet, которое открывается без VPN и сохраняет ваш аккаунт, баланс и
                историю ставок.
              </p>
              <div className="rb-hero-actions">
                <a href="#rb-cta" className="rb-cta">
                  Перейти в RamenBet казино
                </a>
                <a href="#rb-mirror" className="rb-cta rb-cta-ghost">
                  Открыть зеркало
                </a>
              </div>
            </div>
            <div className="rb-hero-art">
              <img
                src="/hero-ramenbet.png"
                alt="RamenBet казино — главный экран с играми и бонусами"
                width="1280"
                height="800"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section id="rb-about" className="rb-section" aria-labelledby="rb-about-title">
          <div className="rb-section-inner">
            <div className="rb-section-head">
              <h2 id="rb-about-title">Что такое RamenBet и почему игроки выбирают это казино</h2>
              <p>
                RamenBet — это бренд, который объединил азиатскую эстетику и европейский подход к
                азартным играм. Здесь нет перегруженного интерфейса: только слоты, live-казино,
                быстрые ставки и понятные правила.
              </p>
            </div>

            <div className="rb-grid">
              <article className="rb-card">
                <span className="rb-tag">RamenBet</span>
                <h3>Бренд с историей</h3>
                <p>
                  RamenBet работает на рынке онлайн-гемблинга несколько лет и дорожит репутацией.
                  Каждый игрок получает честные условия и прозрачные выплаты.
                </p>
              </article>
              <article className="rb-card">
                <span className="rb-tag">Ramen Bet</span>
                <h3>Простая регистрация</h3>
                <p>
                  Создать аккаунт в Ramen Bet можно за минуту: email, пароль, валюта — и вы уже в
                  личном кабинете. Верификация проходит без бюрократии.
                </p>
              </article>
              <article className="rb-card">
                <span className="rb-tag">RamenBet казино</span>
                <h3>Тысячи игр</h3>
                <p>
                  В RamenBet казино собраны слоты, рулетка, блэкджек, баккара и live-шоу с
                  живыми дилерами. Поставщики — только проверенные студии.
                </p>
              </article>
              <article className="rb-card">
                <span className="rb-tag">RamenBet официальный сайт</span>
                <h3>Лицензия и защита</h3>
                <p>
                  RamenBet официальный сайт работает по международной лицензии, использует
                  шифрование и хранит средства игроков на отдельных счетах.
                </p>
              </article>
              <article className="rb-card">
                <span className="rb-tag">RamenBet зеркало</span>
                <h3>Всегда на связи</h3>
                <p>
                  Если основной домен заблокирован, RamenBet зеркало открывается мгновенно и
                  полностью повторяет функциональность главного сайта.
                </p>
              </article>
              <article className="rb-card">
                <span className="rb-tag">RamenBet рабочее зеркало</span>
                <h3>Без VPN и задержек</h3>
                <p>
                  RamenBet рабочее зеркало не требует установки дополнительных программ: просто
                  перейдите по актуальной ссылке и продолжайте играть.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="rb-mirror" className="rb-section" aria-labelledby="rb-mirror-title">
          <div className="rb-section-inner">
            <article className="rb-feature">
              <div className="rb-feature-art">
                <img
                  src="/mirror-ramenbet.png"
                  alt="RamenBet зеркало — альтернативный вход в казино"
                  width="1024"
                  height="768"
                  loading="lazy"
                />
              </div>
              <div className="rb-feature-copy">
                <h2 id="rb-mirror-title">RamenBet зеркало: что это и зачем оно нужно</h2>
                <p>
                  RamenBet зеркало — это точная копия основного сайта, размещённая на другом
                  домене. Оно решает главную проблему игроков: блокировки со стороны провайдеров.
                  Зеркало синхронизировано с главным сервером, поэтому ваш баланс, бонусы и
                  история ставок остаются на месте.
                </p>
                <p>
                  Использовать RamenBet рабочее зеркало так же безопасно, как и основной сайт.
                  Все платежи проходят через защищённые каналы, а личные данные хранятся в
                  зашифрованном виде. Это не сторонний ресурс, а официальное альтернативное
                  подключение, которое поддерживает сам бренд.
                </p>
                <ul>
                  <li>Вход под тем же логином и паролем, что и на RamenBet официальный сайт.</li>
                  <li>Полный каталог игр и live-казино без ограничений.</li>
                  <li>Актуальные акции, турниры и бонусы синхронизированы автоматически.</li>
                  <li>Поддержка работает круглосуточно и на зеркале, и на основном домене.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="rb-official" className="rb-section" aria-labelledby="rb-official-title">
          <div className="rb-section-inner">
            <article className="rb-feature rb-reverse">
              <div className="rb-feature-art">
                <img
                  src="/official-ramenbet.png"
                  alt="RamenBet официальный сайт — лицензия и безопасность"
                  width="1024"
                  height="768"
                  loading="lazy"
                />
              </div>
              <div className="rb-feature-copy">
                <h2 id="rb-official-title">RamenBet официальный сайт: как отличить оригинал</h2>
                <p>
                  В сети появляется много клонов и подделок, поэтому важно знать признаки
                  настоящего ресурса. RamenBet официальный сайт всегда использует защищённое
                  соединение, имеет действующую лицензию и публикует юридические данные в
                  футере.
                </p>
                <p>
                  На главной странице RamenBet официальный сайт вы найдёте раздел с правилами,
                  политикой конфиденциальности и контактами службы поддержки. Если этих
                  документов нет — перед вами копия, которая не имеет отношения к бренду.
                </p>
                <ul>
                  <li>Домен совпадает с адресом, указанным в рассылках и у поддержки.</li>
                  <li>В футере указаны номер лицензии и юридический адрес оператора.</li>
                  <li>Платежи проходят через известные и проверенные шлюзы.</li>
                  <li>Служба поддержки отвечает с корпоративной почты, а не с бесплатных сервисов.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="rb-casino" className="rb-section" aria-labelledby="rb-casino-title">
          <div className="rb-section-inner">
            <article className="rb-feature">
              <div className="rb-feature-art">
                <img
                  src="/casino-ramenbet.png"
                  alt="RamenBet казино — слоты, рулетка и live-игры"
                  width="1024"
                  height="768"
                  loading="lazy"
                />
              </div>
              <div className="rb-feature-copy">
                <h2 id="rb-casino-title">RamenBet казино: игры, бонусы и быстрые выплаты</h2>
                <p>
                  RamenBet казино делает ставку на разнообразие. Здесь есть классические слоты с
                  фриспинами, рулетка с живым дилером, быстрые crash-игры и карточные столы для
                  тех, кто любит стратегию. Каталог обновляется каждую неделю.
                </p>
                <p>
                  Для новых игроков Ramen Bet предлагает приветственный пакет, а постоянные
                  клиенты получают кэшбэк, reload-бонусы и участие в турнирах. Все акции
                  описаны человеческим языком — без мелкого шрифта и скрытых условий.
                </p>
                <ul>
                  <li>Слоты с RTP от 96% и выше — честная математика без подкруток.</li>
                  <li>Live-казино с дилерами, которые говорят на нескольких языках.</li>
                  <li>Вывод средств за минуты на карты, кошельки и криптовалюту.</li>
                  <li>Турниры с прозрачным призовым фондом и понятными правилами.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="rb-faq" className="rb-section rb-faq" aria-labelledby="rb-faq-title">
          <div className="rb-section-inner">
            <div className="rb-section-head">
              <h2 id="rb-faq-title">Частые вопросы о RamenBet</h2>
              <p>Коротко о главном: вход, зеркало, выплаты и безопасность.</p>
            </div>

            <details>
              <summary>Что делать, если RamenBet официальный сайт не открывается?</summary>
              <p>
                Используйте RamenBet рабочее зеркало — это альтернативный адрес, который ведёт
                на тот же сервер. Достаточно перейти по актуальной ссылке и войти под своим
                логином. Если и зеркало недоступно, обратитесь в поддержку RamenBet казино —
                они пришлют свежий адрес.
              </p>
            </details>

            <details>
              <summary>Чем RamenBet зеркало отличается от основного сайта?</summary>
              <p>
                Только доменным именем. RamenBet зеркало использует ту же базу данных, те же
                платёжные шлюзы и ту же службу поддержки. Для игрока разницы нет: баланс,
                бонусы и история ставок полностью синхронизированы.
              </p>
            </details>

            <details>
              <summary>Нужно ли регистрироваться заново на RamenBet рабочее зеркало?</summary>
              <p>
                Нет. Если у вас уже есть аккаунт в Ramen Bet, просто войдите с теми же данными.
                Создавать второй профиль запрещено правилами — это защита бонуса и вашего
                счёта.
              </p>
            </details>

            <details>
              <summary>Как быстро RamenBet казино выводит деньги?</summary>
              <p>
                Скорость зависит от выбранного метода. На электронные кошельки и криптовалюту
                вывод приходит за несколько минут, на банковские карты — в течение суток. Все
                заявки обрабатываются в порядке очереди, без ручных задержек.
              </p>
            </details>

            <details>
              <summary>Безопасно ли играть в RamenBet через зеркало?</summary>
              <p>
                Да, если вы используете RamenBet рабочее зеркало, предоставленное поддержкой.
                Оно работает по тому же протоколу шифрования, что и RamenBet официальный сайт.
                Не переходите по ссылкам из сомнительных рассылок — так можно попасть на
                фишинговую копию.
              </p>
            </details>
          </div>
        </section>

        <section id="rb-cta" className="rb-section" aria-labelledby="rb-cta-title">
          <div className="rb-section-inner">
            <div className="rb-section-head">
              <h2 id="rb-cta-title">Готовы начать играть в RamenBet казино?</h2>
              <p>
                Перейдите на RamenBet официальный сайт или откройте RamenBet рабочее зеркало,
                чтобы забрать приветственный бонус и попробовать лучшие слоты уже сегодня.
              </p>
            </div>
            <div className="rb-hero-actions">
              <a href="/" className="rb-cta">
                Войти в RamenBet
              </a>
              <a href="#rb-mirror" className="rb-cta rb-cta-ghost">
                Открыть зеркало
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="rb-footer" role="contentinfo">
        <div className="rb-footer-inner">
          <div className="rb-footer-brand">
            <a href="/" className="rb-brand" aria-label="RamenBet — официальный сайт">
              <span className="rb-brand-mark" aria-hidden="true">
                R
              </span>
              <span>RamenBet</span>
            </a>
            <p>
              RamenBet — независимый информационный портал о бренде RamenBet казино. Мы
              рассказываем, как устроен RamenBet официальный сайт, зачем нужно RamenBet зеркало
              и где найти RamenBet рабочее зеркало без блокировок.
            </p>
          </div>

          <nav className="rb-footer-tags" aria-label="Поиск по сайту">
            <a href="#rb-about">#ramenbet</a>
            <a href="#rb-about">#ramen bet</a>
            <a href="#rb-mirror">#ramenbet зеркало</a>
            <a href="#rb-mirror">#ramenbet рабочее зеркало</a>
            <a href="#rb-official">#ramenbet официальный сайт</a>
            <a href="#rb-casino">#ramenbet казино</a>
          </nav>

          <div className="rb-footer-meta">
            <span>© {new Date().getFullYear()} RamenBet. Все права защищены.</span>
            <span>Канонический адрес: ramenbet9casino.vercel.app</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
