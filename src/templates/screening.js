import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const ScreeningTemplate = ({
  content, contentComponent, title, helmet, venue, location, link, poster
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      { helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            <p>{venue}</p>
            <p>{location}</p>
            <p>{link}</p>
            <p>{poster}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<ScreeningTemplate
    content={post.html}
    contentComponent={HTMLContent}
    helmet={<Helmet title={`Screening | ${post.frontmatter.title}`} />}
    title={post.frontmatter.title}
    venue={post.frontmatter.venue}
    location={post.frontmatter.location}
    link={post.frontmatter.link}
    poster={post.frontmatter.poster}
  />);
};

export const pageQuery = graphql`
  query ScreeningsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
