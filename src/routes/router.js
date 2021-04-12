const router = {
  api: [
    { httpRoute: '/status', route: '/routes/api/status/status.route', handler: 'get', method: 'GET', protected: false },
    { httpRoute: '/services/backend-uri', route: '/routes/api/services/services.route', handler: 'getBackendUri', method: 'GET', protected: false },
    // Locale
    { httpRoute: '/locale/', route: '/routes/api/locale/locale.route', handler: 'getAllLocales', method: 'GET', protected: false },
    { httpRoute: '/locale/get-idd-countries/', route: '/routes/api/locale/locale.route', handler: 'getAllIDDCountries', method: 'GET', protected: false },
    { httpRoute: '/locale/get-locale/', route: '/routes/api/locale/locale.route', handler: 'getLocale', method: 'GET', protected: false },
    // explorer
    { httpRoute: '/explorer/', route: '/routes/api/explorer/explorer.route', handler: 'get', method: 'GET', protected: false }
  ],
  frontend: [
    { httpRoute: '/', route: '/routes/frontend/home/home.route', handler: 'index' },
    { httpRoute: '/:lang?/index/', route: '/routes/frontend/home/home.route', handler: 'index' },
    { httpRoute: '/robots.txt', route: '/routes/frontend/seo/seo.route', handler: 'robots' },
    { httpRoute: '/sitemap/master.xml', route: '/routes/frontend/seo/seo.route', handler: 'sitemapMaster' },
    { httpRoute: '/sitemap/latest.xml', route: '/routes/frontend/seo/seo.route', handler: 'sitemapLatest' }
  ]
}

module.exports = router
