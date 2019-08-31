const { events } = require('./plugins/events')

module.exports = {
  title: 'Vue BLR',
  description: 'Vue Meetup in Bangalore',
  ga: 'UA-38503997-3',
  plugins: [
    require('./plugins/events')
  ],
  head: [
    ['link', {
      rel: 'icon',
      href: `/icons/icon-152x152.png`
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
  serviceWorker: {
    updatePopup: true
  },
  themeConfig: {
    logo: '/logo.png',
    repo: 'vuejs-in/vue-bangalore',
    docsDir: '/',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          {
            text: 'Code of Conduct',
            link: 'https://github.com/VueJS-IN/vue-bangalore/blob/master/CODE_OF_CONDUCT.md'
          },
          {
            text: 'Events',
            items: [{
              group: 'Events',
              items: [
                ...events.slice(0, 5).map(event => ({ text: `#${event.id} ${event.title}`, link: event.link })),
                {
                  text: 'All events',
                  link: '/events'
                }
              ]
            }]
          },
          {
            text: 'Meetup',
            link: 'https://meetup.com/vue-bangalore'
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/vueblr'
          },
          {
            text: 'WhatsApp',
            link: 'http://bit.ly/vueblr-whatsapp'
          },
          {
            text: 'Facebook',
            items: [
              {
                text: 'Page',
                link: 'https://www.facebook.com/vue.blr'
              },
              {
                text: 'Group',
                link: 'https://www.facebook.com/groups/vue.blr'
              }
            ]
          },
          {
            text: 'Propose a Talk',
            link: 'http://bit.ly/vueblrcfp'
          },
          {
            text: 'Newsletter',
            link: 'https://buttondown.email/VueBLR'
          },
        ]
      }
    }
  }
}
