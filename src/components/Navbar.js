import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = () => (
  <div className="nav-wrap absolute left-0 right-0 top-0 z-1">
    <nav className="flex items-center content-center justify-start-l justify-between fluid-width center pv2">
      <Link
        exact
        activeClassName="is-active"
        className="f5 white mr3-l mv3-l mb3" to="/">Home</Link>
      <Link
        activeClassName="is-active"
        className="f5 white mh3-l mv3-l mb3" to="/about">About</Link>
      <Link
        activeClassName="is-active"
        className="f5 white mh3-l mv3-l mb3" to="/screenings">Screenings</Link>
      <Link
        activeClassName="is-active"
        className="f5 white mh3-l mv3-l mb3" to="/photos">Photos</Link>
      <Link
        activeClassName="is-active"
        className="f5 white ml3-l mv3-l mb3" to="/contact">Contact</Link>
    </nav>
  </div>
);

export default Navbar;
