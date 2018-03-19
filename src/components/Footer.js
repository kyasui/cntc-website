import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <div className="footer-wrap pv3">
    <div className="flex items-center content-center justify-between fluid-width center">
      <div className="socials">
        <a className="white f5 mr3" target="_blank" href="https://instagram.com/carefulnottocry">Instagram</a>
        <a className="white f5 mh3" target="_blank" href="https://twitter.com/carefulnottocry">Twitter</a>
        <a className="white f5 ml3" target="_blank" href="https://www.youtube.com/channel/UCPzONdKLrdFcUXniqxJfnPQ/featured">Youtube</a>
      </div>

      <div className="credits">
        <a className="white f5 mr3 tracked-tight" target="_blank" href="">&copy; 2018</a>
      </div>
    </div>
  </div>
);

export default Footer;
