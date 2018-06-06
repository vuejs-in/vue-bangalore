module.exports = {
  title: 'Vue BLR',
  description: 'Vue Meetup in Bangalore',
  ga: 'UA-38503997-3',
  head: [
    ['link', {
      rel: 'icon',
      href: `/icons/icon-152x152.png`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#0188DE'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    ['link', {
      rel: 'apple-touch-icon',
      href: `/icons/icon-152x152.png`
    }],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/icon-144x144.png'
      }
    ],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'vuejs-in/vue-bangalore',
    docsDir: '/',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        nav: [{
            text: 'Events',
            items: [{
              group: 'Past Events',
              items: [
                {
                  text: 'Hello Vue.js',
                  link: '/01-hello-vue.js/'
                },
                {
                  text: 'Step by Step',
                  link: '/02-step-by-step/'
                },
                {
                  text: 'State Management',
                  link: '/03-state-management/'
                },
                {
                  text: 'Future of Vue.js',
                  link: '/04-future-of-vue.js/'
                },
                {
                  text: 'What\'s up SSR',
                  link: '/05-whats-up-ssr/'
                },
                {
                  text: 'Begin Again',
                  link: '/06-begin-again/'
                },
                {
                  text: 'Building Mobile Apps',
                  link: '/07-building-mobile-apps/'
                }
              ]
            }]
          },
          {
            text: 'Meetup',
            link: 'http://meetup.com/vue-bangalore'
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/vueblr'
          }
        ]
      }
    }
  }
}