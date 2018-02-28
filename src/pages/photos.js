import React from "react";
import { Link, withPrefix } from "gatsby-link";
import Script from "react-load-script";
import ReactDOM from 'react-dom';
import graphql from "graphql";
import LazyLoad from 'react-lazyload';

export default class PhotosPage extends React.Component {
  render() {
    return (
      <section className="pv3 mv5 min-h">
        <div className="fluid-width center mv5">
          <h3 className="lh-copy black f2 tc mt5 section-title dib center mb4">Photos</h3>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_01.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_02.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_03.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_04.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_05.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_06.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_07.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_08.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_09.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_10.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_11.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_12.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_13.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_14.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_15.jpg')} />
          </LazyLoad>
          <LazyLoad height={450} once offset={100}>
            <img src={withPrefix('/img/stills/CNTC_MRR_16.jpg')} />
          </LazyLoad>
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query PhotosPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
