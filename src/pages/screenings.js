import React from "react";
import { Link, withPrefix } from "gatsby-link";
import Script from "react-load-script";
import ReactDOM from 'react-dom';
import graphql from "graphql";
import Helmet from 'react-helmet';

import { format, compareAsc } from "date-fns";

export default class ScreeningsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    let futureScreenings = posts.filter(post => {
      let today = new Date();
      let screeningDate = new Date(post.node.frontmatter.date);

      let isScreeningDateInFuture = compareAsc(
        screeningDate,
        today
      );

      return (post.node.frontmatter.templateKey === "screening" && isScreeningDateInFuture === 1);
    });

    let pastScreenings = posts.filter(post => {
      let today = new Date();
      let screeningDate = new Date(post.node.frontmatter.date);

      let isScreeningDateInFuture = compareAsc(
        screeningDate,
        today
      );

      return (post.node.frontmatter.templateKey === "screening" && isScreeningDateInFuture !== 1);
    });

    console.log(futureScreenings.length, pastScreenings.length);

    return (
      <section className="section mv5 pv5">
        <div className="flex items-center content-center justify-center">
          <h1 className="lh-copy black f2 tc mt5 section-title dib center mb4">Screenings</h1>
        </div>
        <Helmet>
          <title>Careful Not to Cry | Screenings</title>
        </Helmet>
        <div className="container pv5 pl5-l">
          <div className="fluid-width center mb5 pb5 cf">
            <h3 className="lh-copy black-80 f3 mt5 dib mb0 o-50">Upcoming</h3>
            <div className="mb5 pv5">
              {futureScreenings.length ? futureScreenings.map(({ node: post }, index) => {
                  return(<div key={`screening-${index}`} className="screening mb5 tl">
                    <h4 className="lh-copy black f7">{format(new Date(post.frontmatter.date), 'MM/DD/YYYY')}</h4>
                    <h2 className="lh-copy black f3">{post.frontmatter.venue}</h2>
                    <h3 className="lh-copy black f7">{post.frontmatter.location}</h3>
                    {post.frontmatter.link ? (<a className="lh-copy black-90 f7 mt3 dib ttu" target="_blank" href={post.frontmatter.link}>View Info →</a>) : null}
                  </div>);
                }) : (<h4 className="black-50 f4">None At This Time</h4>)}
            </div>
          </div>

          <div className="fluid-width center">
            <h3 className="lh-copy black-80 f3 mt5 dib o-50">Past</h3>
            <div className="mb5 pv5">
              {pastScreenings.length ? pastScreenings.map(({ node: post }, index) => {
                  return(<div key={`screening-${index}`} className="screening mb5 tl">
                    <h4 className="lh-copy black f7">{format(new Date(post.frontmatter.date), 'MM/DD/YYYY')}</h4>
                    <h2 className="lh-copy black f3">{post.frontmatter.venue}</h2>
                    <h3 className="lh-copy black f7">{post.frontmatter.location}</h3>
                    {post.frontmatter.link ? (<a className="lh-copy black-90 f7 mt3 dib ttu" target="_blank" href={post.frontmatter.link}>View Info →</a>) : null}
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
            venue
            location
            link
            poster
          }
        }
      }
    }
  }
`;
