import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

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
    return(<div className={`${pageClass} ${navClass}`}>
      <Helmet title="Home | Gatsby + Netlify CMS" />
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
