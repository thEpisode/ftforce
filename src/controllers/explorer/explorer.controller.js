function courseController (dependencies) {
  const _console = dependencies.console
  const _utilities = dependencies.utilities
  const _controllers = dependencies.controllers

  const get = async (data) => {
    try {
      const repoCommitsResponse = await _controllers.backend.request({
        endpointName: 'repoCommits',
        queryString: _utilities.serializer.object.toQueryString(data.queryString),
        clean: false,
        method: 'GET',
        endpointParams: data.repo
      })

      const repoInfoResponse = await _controllers.backend.request({
        endpointName: 'repoInfo',
        queryString: _utilities.serializer.object.toQueryString(data.queryString),
        clean: false,
        method: 'GET',
        endpointParams: data.repo
      })

      if (!repoCommitsResponse || !repoInfoResponse) {
        return _utilities.response.error()
      }

      return _utilities.response.success({
        info: repoInfoResponse,
        commits: repoCommitsResponse
      })
    } catch (error) {
      _console.error(error)
      return _utilities.response.error()
    }
  }

  return {
    getAll: get
  }
}

module.exports = courseController
