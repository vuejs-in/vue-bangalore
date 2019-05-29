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
            link: '//meetup.com/vue-bangalore'
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