const React = require('react');

class Footer extends React.Component {
  render () {
    let date = new Date()
    return (
      <footer className="ftco-footer ftco-section img">
        <div className="overlay"></div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 mb-5 mb-md-5">
              <div className="ftco-footer-widget mb-4">
                <h1 className="logo">ftforce</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="">
                Copyright © {date.getFullYear()}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

module.exports = Footer;
