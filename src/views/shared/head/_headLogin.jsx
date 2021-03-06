const React = require('react');

class Head extends React.Component {
  render () {

    return (
      <head>
        <title>{`${this.props.title} -` || ''} ftforce</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="keywords" content="ftforce, best, ever, world, easy, use, usage" />
        <meta name="description" content="ftforce is an awesome project created with node.js" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <link rel="apple-touch-icon" sizes="57x57" href="/img/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/img/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/img/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/img/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/img/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/img/android-icon-192x192.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon-96x96.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png?v=2" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#2F395D" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/img/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Schema.org markup for Google+ */}
        <meta itemProp="name" content="ftforce" />
        <meta itemProp="description" content="ftforce is an awesome project created with node.js" />
        <meta itemProp="image" content="https://ftforce-node.com/assets/img/FacebookBanner.jpg" />
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="&#64;ftforce-node" />
        <meta name="twitter:title" content="ftforce" />
        <meta name="twitter:description" content="ftforce is an awesome project created with node.js" />
        <meta name="twitter:creator" content="&#64;ftforce-node" />
        <meta name="twitter:image" content="https://ftforce-node.com/assets/img/FacebookBanner.jpg" />
        {/* Open Graph data */}
        <meta property="og:title" content="ftforce" />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://ftforce-node.com/" />
        <meta property="og:image" content="https://ftforce-node.com/assets/img/FacebookBanner.jpg" />
        <meta property="og:description" content="ftforce is an awesome project created with node.js" />
        <meta property="og:site_name" content="ftforce" />

        {/* Vue */}
        <script src="/vue/vue.js"></script>
        <script src="/vue-resource/vue-resource.min.js"></script>
        <script src="/vue-cookies/vue-cookies.js"></script>

        {/* Libraries */}
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/sweetalert2/sweetalert2.min.css"></link>
        <link rel="stylesheet" href="/datatables-bs4/css/dataTables.bootstrap4.css"></link>
        <link rel="stylesheet" href="/css/icomoon.css"></link>
        <link rel="stylesheet" href="/material-design-font/css/materialdesignicons.css"></link>
        <link rel="stylesheet" href="/select2/css/select2.min.css"></link>

        {/* Custom CSS */}
        <link rel="stylesheet" href="/css/main.css"></link>

      </head>
    );
  }
}

module.exports = Head;
