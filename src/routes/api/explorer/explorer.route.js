function route (dependencies) {
  const _utilities = dependencies.utilities
  const _controllers = dependencies.controllers

  const get = async (req, res) => {
    let result = {}
    const params = _utilities.request.getParameters(req)

    result = await _controllers.explorer.getAll(params)

    res.json(result)
  }

  return {
    get
  }
}

module.exports = route
