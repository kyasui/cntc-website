import React from 'react';
import { withPrefix } from "gatsby-link";
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section mv5 pv5">
      <div className="fluid-width center">
        <h1 className="tc f1 lh-title black mv5">About</h1>

        <div className="flex items-center content-center justify-between">
          <div className="w-50 pa5">
            <img src={withPrefix('/img/main-poster.jpg')} />
          </div>
          <div className="w-50 pa5 flex items-center content-center justify-center">
            <h3 className="f2 lh-copy black">Careful Not to Cry is the feature debut of writer/director Erik Sutch.</h3>
          </div>
        </div>

        <div className="flex items-start content-start justify-between mt5">
          <div className="w-50 pa5 flex items-start content-start justify-end">
            <p className="lh-copy black f4">Synopsis</p>
          </div>
          <div className="w-50 pa5">
            <p className="lh-copy black f4">It is about an abortion doctor whose clinic has been temporarily shut down by restrictive state laws and how she spends her days driving a taxi cab until it reopens.</p>
          </div>
        </div>

        <div className="flex items-start content-start justify-between mt5">
          <div className="w-50 pa5 flex items-start content-start justify-end">
            <p className="lh-copy black f4">Credits</p>
          </div>
          <div className="w-50 pa5">
            <p className="lh-copy black f4 mb4">Meka Butler, Sé Marie, Suzanne Sadler, and Linda Kanyarusoke were the primary actors.</p>

            <p className="lh-copy black f4 mb4">Russell Hawkins, Dan McCurry, Sarah Brunner, Bruce Crocker, and Matthew Wallenstein were the secondary actors.</p>

            <p className="lh-copy black f4 mb4">Jacob Gross was the producer.</p>

            <p className="lh-copy black f4 mb4">Danielle Calodney was the director of photography. </p>

            <p className="lh-copy black f4 mb4">Matt Fletcher composed the music. </p>

            <p className="lh-copy black f4 mb4">With additional music from Julius Eastman, Shin Joong Hyun, Josef Leimberg, and Moses Sumney. </p>

            <p className="lh-copy black f4 mb4">Shawn Petersen was the financier.</p>
          </div>
        </div>

        <div className="flex items-start content-start justify-between mt5">
          <div className="w-50 pa5 flex items-start content-start justify-end">
            <p className="lh-copy black f4">Posters</p>
          </div>
          <div className="w-50 pa5 flex items-start content-start justify-between">
            <img className="w-40" src={withPrefix('/img/main-poster.jpg')} />
            <img className="w-40" src={withPrefix('/img/main-poster.jpg')} />
          </div>
        </div>

        <div className="flex items-start content-start justify-between mt5">
          <div className="w-50 pa5 flex items-start content-start justify-end">
            <p className="lh-copy black f4">Trailer</p>
          </div>
          <div className="w-50 pa5">
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
