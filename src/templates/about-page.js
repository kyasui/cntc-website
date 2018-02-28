import React from 'react';
import { withPrefix } from "gatsby-link";
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';
import Credits from '../components/Credits';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section mv5 pv5">
      <div className="fluid-width center">
        <h1 className="tc f1 lh-title black mv5">About</h1>

        <div className="flex-l items-center content-center justify-between">
          <div className="w-100 w-50-l pa5-l mb4 mb0-l">
            <img src={withPrefix('/img/main-poster.jpg')} />
          </div>
          <div className="w-100 w-50-l pa5-l flex-l items-center content-center justify-center">
            <h3 className="f2 lh-copy black">Careful Not to Cry is the feature debut of writer/director Erik Sutch.</h3>
          </div>
        </div>

        <div className="flex-l items-start content-start justify-between mt5">
          <div className="w-100 w-30-l pa5-l flex-l items-start content-start justify-end">
            <p className="lh-copy black f3 dib section-title mb4 mb0-l">Synopsis</p>
          </div>
          <div className="w-100 w-70-l pa5-l">
            <p className="lh-copy black f3">It is about an abortion doctor whose clinic has been temporarily shut down by restrictive state laws and how she spends her days driving a taxi cab until it reopens.</p>
          </div>
        </div>

        <Credits />

        <div className="flex-l items-start content-start justify-between mt5">
          <div className="w-100 w-30-l pa5-l flex-l items-start content-start justify-end">
            <p className="lh-copy black f3 dib section-title mb4 mb0-l">Posters</p>
          </div>
          <div className="w-100 w-70-l pa5-l flex items-start content-start justify-between">
            <img className="image-column" src={withPrefix('/img/main-poster.jpg')} />
            <img className="image-column" src={withPrefix('/img/main-poster.jpg')} />
          </div>
        </div>

        <div className="flex-l items-start content-start justify-between mt5">
          <div className="w-100 w-30-l pa5-l flex-l items-start content-start justify-end">
            <p className="lh-copy black f3 dib section-title mb4 mb0-l">Trailer</p>
          </div>
          <div className="w-100 w-70-l pa5-l">
            <div className="aspect-ratio aspect-ratio--16x9 relative w-100">
              <iframe className="aspect-ratio--object" src="https://www.youtube.com/embed/um7GsPmlrFU" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

/*<h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
<PageContent className="content" content={content} />*/

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<AboutPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    content={post.html}
  />);
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
