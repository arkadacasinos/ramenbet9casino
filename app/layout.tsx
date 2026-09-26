import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const CANONICAL = 'https://ramenbet9casino.vercel.app/'

export const metadata: Metadata = {
  title:
    'RamenBet казино — рабочее зеркало и официальный сайт для честной игры онлайн',
  description:
    'RamenBet — официальный сайт онлайн казино с лицензией, слотами и live-играми. Рабочее зеркало RamenBet открывается без VPN, сохраняет баланс и бонусы. Вход и регистрация за минуту.',
  keywords: [
    'ramenbet',
    'ramen bet',
    'ramenbet зеркало',
    'ramenbet рабочее зеркало',
    'ramenbet официальный сайт',
    'ramenbet казино',
  ],
  authors: [{ name: 'RamenBet' }],
  creator: 'RamenBet',
  publisher: 'RamenBet',
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: CANONICAL,
    siteName: 'RamenBet',
    title:
      'RamenBet казино — рабочее зеркало и официальный сайт для честной игры',
    description:
      'RamenBet — официальный сайт онлайн казино. Рабочее зеркало RamenBet без блокировок, быстрые выплаты и лицензионные слоты.',
    images: [
      {
        url: '/hero-ramenbet.png',
        width: 1280,
        height: 800,
        alt: 'RamenBet казино — официальный сайт и рабочее зеркало',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RamenBet казино — рабочее зеркало и официальный сайт',
    description:
      'RamenBet — лицензионное онлайн казино. Зеркало RamenBet работает без VPN, вход и регистрация за минуту.',
    images: ['/hero-ramenbet.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-ramenbet.png', sizes: 'any', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon-ramenbet.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1020',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="7dcd13d41993af16" />
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0b1020" />
        <meta name="msapplication-TileColor" content="#0b1020" />
        <meta name="application-name" content="RamenBet" />
        <meta name="apple-mobile-web-app-title" content="RamenBet" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="rating" content="18+" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Russia" />
        <meta name="language" content="Russian" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="3 days" />
        <meta property="og:site_name" content="RamenBet" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="/hero-ramenbet.png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="RamenBet казино — официальный сайт" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RamenBet казино — рабочее зеркало и официальный сайт" />
        <meta
          name="twitter:description"
          content="RamenBet — лицензионное онлайн казино. Рабочее зеркало RamenBet без блокировок."
        />
        <meta name="twitter:image" content="/hero-ramenbet.png" />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hrefLang="ru" href={CANONICAL} />
        <link rel="alternate" hrefLang="x-default" href={CANONICAL} />
        <link rel="icon" href="/favicon-ramenbet.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon-ramenbet.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "aHR0cHM6Ly8xNTc5LnNwYXJrc3ZhbGUuY29tL3J1L3JlZ2lzdHJhdGlvbj9wYXJ0bmVyPXAxNTc5cDM5MjEwcGZlMjc="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
