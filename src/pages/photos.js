import React from "react";
import { Link, withPrefix } from "gatsby-link";
import Script from "react-load-script";
import ReactDOM from 'react-dom';
import graphql from "graphql";

export default class PhotosPage extends React.Component {
  render() {
    return (
      <section className="pv3 mv5 min-h">
        <div className="fluid-width center mv5">
          <h3 className="lh-copy black f2 tc mt5 section-title dib center mb4">Photos</h3>,
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
