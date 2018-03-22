import React from "react";
import { Link, withPrefix } from "gatsby-link";
import Script from "react-load-script";
import ReactDOM from 'react-dom';
import graphql from "graphql";

import Modal from '../components/Modal';
import Synopsis from '../components/Synopsis';
import Credits from '../components/Credits';
import Video from '../components/Video';
import { format, compareAsc } from "date-fns";

export default class IndexPage extends React.Component {
  state = {
    shouldShowVideoOverlay: this.props.location.search === '?trailer' ? true : false
  }

  toggleVideoOverlay = () => {
    this.setState({
      shouldShowVideoOverlay: !this.state.shouldShowVideoOverlay
    });
  }

  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

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

    return (
      <section className="section bg-white">
        <div className="vh-100 relative z-0 bg-black">
          <Video />
          <div className="fluid-width absolute absolute--fill center flex items-center content-center justify-start-l justify-center z-2 tc tl-l">
            <div>
              <h1 className="f-subheadline-l f1 lh-solid white mt4">Careful<br />
              Not to Cry</h1>
              <p className="f4-l f5 lh-copy ma0 white mt2">A Film by Erik Sutch</p>
              <button className="button blue-button mt4 bn pointer" onClick={this.toggleVideoOverlay}>Watch Trailer</button>
            </div>
          </div>
        </div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container pv5 bg-blue relative z-1">
          <div className="fluid-width center">
            <p className="lh-copy white f2-l f3 tc mt5">Upcoming Screenings</p>

            <div className="flex items-start content-start justify-center mv5">
              <div className="mw7 center pa5">
                {futureScreenings.length ? futureScreenings.map(({ node: post }, index) => {
                  return(<div key={`future-screening-${index}`} className="screening mb5">
                    <h4 className="lh-copy white f7">{format(new Date(post.frontmatter.date), 'MM/DD/YYYY')}</h4>
                    <h2 className="lh-copy white f3">{post.frontmatter.venue}</h2>
                    <h3 className="lh-copy white f7">{post.frontmatter.location}</h3>
                    {post.frontmatter.link ? (<a className="lh-copy white-90 f7 mt3 dib ttu" target="_blank" href={post.frontmatter.link}>View Info →</a>) : null}
                  </div>);
                }) : (<h4 className="white-50 f4 tc">None At This Time</h4>)}

              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative z-1">
          <div className="fluid-width center cf">
            <Synopsis />
            <Credits />
          </div>
        </div>
        {this.state.shouldShowVideoOverlay ? (
          <Modal toggleModal={this.toggleVideoOverlay}>
            <div className="aspect-ratio aspect-ratio--16x9 relative w-100 mw8 center z-9999">
              <iframe className="aspect-ratio--object" src="https://www.youtube.com/embed/f8hbWs2tm8I" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </Modal>
        ) : null}
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            location
            venue
            link
          }
        }
      }
    }
  }
`
