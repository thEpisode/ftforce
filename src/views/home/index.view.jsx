const React = require('react');
const Layout = require('../shared/layouts/_layoutPublic');

class Index extends React.Component {
  render () {

    return (
      <Layout {...this.props}>
        <section className="mt-5 pt-5">
          <h2 className="text-center text-muted mt-5">{this.props.data.locale.MAIN_TITLE_LABEL}</h2>
          <p className="card-description text-center">{this.props.data.locale.MAIN_DESCRIPTION_LABEL} {'{{vueBind.model.entity.info.full_name}}'}</p>

          <div className="container py-2 mt-4 mb-4">
            <div className="row no-gutters" v-for="(_entity, index) in vueBind.model.entity.commits">
              <article className="d-flex w-100" v-if="index % 2 === 0">
                <div className="col-sm"> </div>
                <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                  <div className="row h-50">
                    <div className="col">&nbsp;</div>
                    <div className="col">&nbsp;</div>
                  </div>
                  <h5 className="m-2">
                    <span className="badge badge-pill bg-light border">&nbsp;</span>
                  </h5>
                  <div className="row h-50">
                    <div className="col border-right">&nbsp;</div>
                    <div className="col">&nbsp;</div>
                  </div>
                </div>
                <div className="col-sm py-2">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="float-right small">{'{{_entity.commit.author.date }}'}</div>
                      <h4 className="card-title">{'{{_entity.author.login }}'}</h4>
                      <p className="card-text">{'{{_entity.commit.message }}'}</p>
                    </div>
                  </div>
                </div>
              </article>
              <article className="d-flex w-100" v-if="index % 2 !== 0">
                <div className="col-sm py-2">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="float-right small">{'{{_entity.commit.author.date }}'}</div>
                      <h4 className="card-title">{'{{_entity.author.login }}'}</h4>
                      <p className="card-text">{'{{_entity.commit.message }}'}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                  <div className="row h-50">
                    <div className="col border-right">&nbsp;</div>
                    <div className="col">&nbsp;</div>
                  </div>
                  <h5 className="m-2">
                    <span className="badge badge-pill bg-light border">&nbsp;</span>
                  </h5>
                  <div className="row h-50">
                    <div className="col border-right">&nbsp;</div>
                    <div className="col">&nbsp;</div>
                  </div>
                </div>
                <div className="col-sm">  </div>
              </article>
            </div>

          </div>
        </section>

      </Layout>
    );
  }
}

module.exports = Index;
