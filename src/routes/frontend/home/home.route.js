function home (dependencies) {
  const index = (req, res) => {
    req.route = { ...req.route, ...{ name: 'home', handler: 'index' } }
    req.lookup = dependencies.geolocator.getLookup(req)
    const locale = dependencies.locale.international(req, res)
    if (!locale) {
      res.redirect('/maintenance?error=lang-not-found&code=501&message=Language%20localization%20not%20implemented%20and%20page%20is%20not%20accesible')
      return
    }

    res.render('home/index.view.jsx', {
      title: 'Home',
      data: {
        locale,
        services: [
          '_services/explorer/s-explorer.js'
        ]
      },
      vue: '_views/home/v-index.js'
    })
  }

  return {
    index
  }
}

module.exports = home
