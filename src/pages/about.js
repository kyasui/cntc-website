import React from 'react';
import { withPrefix } from "gatsby-link";
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Synopsis from '../components/Synopsis';
import Credits from '../components/Credits';

import LazyLoad from 'react-lazyload';
import Img from '../components/Img';

export default class AboutPage extends React.Component {
  render() {
    return (
      <section className="section mv5 pv5">
         <Helmet>
          <title>Careful Not to Cry | About</title>
        </Helmet>
        <div className="fluid-width center">
          <div className="flex items-center content-center justify-center">
            <h1 className="lh-copy black f2 tc mt5 section-title dib center mb4">About</h1>
          </div>

          <div className="flex-l items-center content-center justify-between">
            <div className="w-100 w-50-l pa5-l mb4 mb0-l">
              <img src={withPrefix('/img/main-poster.jpg')} />
            </div>
            <div className="w-100 w-50-l pa5-l flex-l items-center content-center justify-center">
              <h3 className="f2 lh-copy black">Careful Not to Cry is the feature debut of writer/director Erik Sutch.</h3>
            </div>
          </div>

          <Synopsis />
          <Credits />

          <div className="flex-l items-start content-start justify-between mt5">
            <div className="w-100 w-30-l pa5-l flex-l items-start content-start justify-end">
              <p className="lh-copy black f3 dib section-title mb4 mb0-l">Posters</p>
            </div>
            <div className="w-100 w-70-l pa5-l flex items-start content-start justify-between">
              <LazyLoad height={450} once offset={100}>
                <a className="db image-column" target="_blank" href={withPrefix('/img/poster-1.jpg')}><Img isBg={false} imageSrc={withPrefix('/img/poster-1.jpg')} /></a>
              </LazyLoad>
              <LazyLoad height={450} once offset={100}>
                <a className="db image-column" target="_blank" href={withPrefix('/img/poster-2.jpg')}><Img isBg={false} imageSrc={withPrefix('/img/poster-2.jpg')} /></a>
              </LazyLoad>
            </div>
          </div>

          <div className="flex-l items-start content-start justify-between mt5">
            <div className="w-100 w-30-l pa5-l flex-l items-start content-start justify-end">
              <p className="lh-copy black f3 dib section-title mb4 mb0-l">Trailer</p>
            </div>
            <div className="w-100 w-70-l pa5-l">
              <div className="aspect-ratio aspect-ratio--16x9 relative w-100">
                <iframe className="aspect-ratio--object" src="https://www.youtube.com/embed/f8hbWs2tm8I" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    );

  }
};

