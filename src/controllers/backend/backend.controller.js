function backendController (dependencies) {
  const _console = dependencies.console
  const _request = dependencies.request
  const _auth = dependencies.auth
  const _key = _auth.crypto.generatePrivateKey(dependencies.config.BACKEND_SECRET)

  const getKey = () => {
    return _key
  }

  const request = async (data, token = '') => {
    if (!data || !data.endpointName || typeof data.endpointName !== 'string' || data.endpointName.length <= 0) {
      return null
    }

    const endpoint = {}
    data.decipher = Object.is(data.decipher, undefined) ? true : data.decipher

    for (var key in dependencies.config.API_ENDPOINTS) {
      if (key.toLocaleLowerCase() === data.endpointName.toLocaleLowerCase()) {
        Object.defineProperties(endpoint, {
          base: {
            writable: false,
            enumerable: false,
            configurable: false,
            value: dependencies.config.API_ENDPOINTS[key].BASE
          },
          name: {
            writable: false,
            enumerable: false,
            configurable: false,
            value: key
          },
          path: {
            writable: false,
            enumerable: false,
            configurable: false,
            value: dependencies.config.API_ENDPOINTS[key].PATH.replace('{0}', data.endpointParams) + (data.queryString || '')
          },
          method: {
            writable: false,
            enumerable: false,
            configurable: false,
            value: data.method
          }
        })
      }
    }

    if (!endpoint || !endpoint.path) {
      return null
    }

    try {
      const response = await doRequest(token, endpoint, data.parameters)

      return response
    } catch (error) {
      _console.log(error)
      return null
    }
  }

  const doRequest = async (token, endpoint, parameters) => {
    return new Promise(function (resolve, reject) {
      const route = `${endpoint.base}${endpoint.path}`
      _request({
        method: endpoint.method,
        uri: route,
        gzip: true,
        body: parameters || {},
        json: true,
        headers: {
          'x-access-token': token,
          'User-Agent': dependencies.config.SERVER_NAME
        }
      }, function (error, res, body) {
        if (!error && res.statusCode === 200) {
          resolve(body)
        } else {
          reject(error || body)
        }
      })
    })
  }

  return {
    request,
    getKey
  }
}

module.exports = backendController
