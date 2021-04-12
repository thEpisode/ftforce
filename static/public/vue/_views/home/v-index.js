/* global Vue, stage, popup, b64, format, time, auth, find, localization, loader, parameters
   explorerService */
window.app = new Vue({
  el: '#vue-app',
  mixins: [
    stage,
    popup,
    b64,
    format,
    time,
    auth,
    find,
    localization,
    loader,
    parameters,
    explorerService],
  data: {
    vueBind: {
      model: {
        repoName: 'thEpisode/beat',
        repo: {
          info: {},
          commits: []
        }
      }
    },
    issues: {
      '[CODE]': {
        title: '[TITLE]',
        message: '[MESSAGE]'
      }
    }
  },
  mounted () {
    window.context = {
      ...window.context,
      ...{
        identity: this.$cookies.get('user_identity'),
        token: this.$cookies.get('user_session')
      }
    }
  },
  methods: {
    async initializeView () {
      await this.getRepo()
      this.hideLoader()

      this.checkIssuesMessages()
    },
    async checkIssuesMessages () {
      if (!window.location.queryString || !window.location.queryString.issue) {
        return
      }

      this.showIconPopup(this.issues[window.location.queryString.issue])
    },
    async getRepo () {
      const entityResponse = await this.services.explorer.getByParameters({
        repo: this.vueBind.model.repoName || ''
      })

      if (!entityResponse || !entityResponse.success) {
        this.showDefaultError(entityResponse)
        return
      }

      this.vueBind.model.repo = entityResponse.result
    }
  }
})
