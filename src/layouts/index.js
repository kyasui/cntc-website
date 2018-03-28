import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './base.scss';
import './fonts.scss';
import './nav.scss';
import './footer.scss';


class TemplateWrapper extends React.Component {
  render() {
    let pageClass = (this.props.location.pathname !== '/') ? this.props.location.pathname.substring(1) : 'home';
    let navClass = (this.props.location.pathname !== '/') ? 'solid' : '';
    return(<div className={`${pageClass} ${navClass} bg-white`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Careful Not to Cry | A Film by Erik Sutch</title>
        <meta property="og:site_name" content="Careful Not to Cry" />

        <link rel="canonical" href="https://carefulnottocry.com" />
        <link rel="shortcut icon" type="image/x-icon" href={withPrefix('/img/favicon.ico')} />
        <meta
          property="og:description"
          content="Careful Not to Cry is the feature debut of writer/director Erik Sutch."
        />
        <meta
          name="description"
          content="Careful Not to Cry is the feature debut of writer/director Erik Sutch.."
        />
        <meta property="og:title" content="Careful Not to Cry | A Film by Erik Sutch" />
        <meta property="og:url" content="https://carefulnottocry.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={withPrefix('/img/share-image.png')} />
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet" />
      </Helmet>
      <Navbar />
      {this.props.children()}
      <Footer />
    </div>);
  }
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
