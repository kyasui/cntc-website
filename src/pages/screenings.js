import React from "react";
import { Link, withPrefix } from "gatsby-link";
import Script from "react-load-script";
import ReactDOM from 'react-dom';
import graphql from "graphql";

import { format, compareAsc } from "date-fns";

export default class ScreeningsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    let futureScreenings = posts.filter(post => {
      let today = new Date();
      let screeningDate = new Date(post.node.frontmatter.date);

      let isScreeningDateInFuture = compareAsc(
        today,
        screeningDate
      );

      return (post.node.frontmatter.templateKey === "blog-post" && !isScreeningDateInFuture);
    });

    let pastScreenings = posts.filter(post => {
      let today = new Date();
      let screeningDate = new Date(post.node.frontmatter.date);

      let isScreeningDateInFuture = compareAsc(
        today,
        screeningDate
      );

      return (post.node.frontmatter.templateKey === "blog-post" && isScreeningDateInFuture);
    });

    console.log(futureScreenings.length, pastScreenings.length);

    return (
      <section className="pv3 mv5 min-h">
        <div className="container pv5">
          <div className="fluid-width center mb5 pb5 cf">
            <h3 className="lh-copy black f2 mt5 section-title dib mb4">Upcoming</h3>
            <div className="mv5 pv5">
              {futureScreenings.length ? futureScreenings.map(({ node: post }, index) => {
                  return(<div key={`screening-${index}`} className="screening mb5 tl">
                    <h4 className="lh-copy black f7">{post.frontmatter.date}</h4>
                    <h2 className="lh-copy black f3">{post.frontmatter.date}</h2>
                    <h3 className="lh-copy black f7">{post.frontmatter.date}</h3>
                    {post.frontmatter.date ? (<a className="lh-copy white-90 f7 mt3 dib ttu" target="_blank" href="">View Info →</a>) : null}
                  </div>);
                }) : (<h4 className="black-50 f4">None At This Time</h4>)}
            </div>
          </div>

          <div className="fluid-width center">
            <h3 className="lh-copy black f2 mt5 section-title dib">Past</h3>
            <div className="mv5 pv5">
              {pastScreenings.length ? pastScreenings.map(({ node: post }, index) => {
                  return(<div key={`screening-${index}`} className="screening mb5 tl">
                    <h4 className="lh-copy black f7">{post.frontmatter.date}</h4>
                    <h2 className="lh-copy black f3">{post.frontmatter.date}</h2>
                    <h3 className="lh-copy black f7">{post.frontmatter.date}</h3>
                    {post.frontmatter.date ? (<a className="lh-copy white-90 f7 mt3 dib ttu" target="_blank" href="">View Info →</a>) : null}
                  </div>);
                }) : (<h1>NOTHING UPCOMING</h1>)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query ScreeningsPageQuery {
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
