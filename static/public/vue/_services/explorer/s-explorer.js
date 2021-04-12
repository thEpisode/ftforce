
// eslint-disable-next-line no-unused-vars
var explorerService = {
  data: {
    services: {
      explorer: {}
    }
  },
  mounted () {
    this.services.explorer = {
      getByParameters: this.$_getByParameters_explorer
    }
  },
  methods: {
    async $_getByParameters_explorer (parameters, query) {
      try {
        let q = ''

        if (!parameters) {
          return null
        }

        if (query) {
          q = `&q=${query}`
        }

        const params = this.objectToQueryString(parameters)

        const result = await this.$http
          .get(`${window.context.origin}/api/explorer${params}${q}`,
            {
              headers: {
                'x-access-token': window.context.token
              }
            })

        return result.body
      } catch (error) {
        console.error(error)
        return error.body
      }
    }
  }
}
