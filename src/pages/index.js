import React from "react";
import { Link, withPrefix } from "gatsby-link";
import Script from "react-load-script";
import ReactDOM from 'react-dom';
import graphql from "graphql";

import Modal from '../components/Modal';

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

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({
        trigger: true,
      });
    });
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section">
        <div className="aspect-ratio aspect-ratio--16x9 relative z-0 bg-black">
          <div className={"aspect-ratio--object z-1 overflow-hidden splash-video"  + (this.state.trigger ? ' is-active' : '')}>
            <div className="bg-black-40 absolute--fill absolute z-2"></div>
            <video
              className="of-cover z-1 relative"
              playsInline
              autoPlay
              muted
              loop>
              <source src={withPrefix('/video/landing.mp4')} type="video/mp4" />
            </video>
          </div>
          <div className="fluid-width absolute absolute--fill center flex items-center content-center justify-start-l justify-center z-2 tc tl-l">
            <div>
              <h1 className="f-subheadline-l f2 lh-solid white mt4">Careful<br />
              Not to Cry</h1>
              <p className="f4-l f5 lh-copy ma0 white mt2">A Film by Erik Sutch</p>
              <button className="button blue-button ttu mt4 bn pointer" onClick={this.toggleVideoOverlay}>Watch Trailer</button>
            </div>
          </div>
        </div>
        {this.state.shouldShowVideoOverlay ? (
          <Modal toggleModal={this.toggleVideoOverlay}>
            <div className="aspect-ratio aspect-ratio--16x9 relative w-100 mw8 center z-9999">
              <iframe className="aspect-ratio--object" src="https://www.youtube.com/embed/um7GsPmlrFU" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </Modal>
        ) : null}
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container mv5">
          <div className="fluid-width center">
            <h2 className="f3 lh-title">Upcoming Screenings</h2>
          </div>
          {/*posts
            .filter(post => post.node.frontmatter.templateKey === "blog-post")
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.frontmatter.path}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))*/}
        </div>
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
