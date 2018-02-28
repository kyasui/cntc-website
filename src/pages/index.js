import React from "react";
import { Link, withPrefix } from "gatsby-link";
import Script from "react-load-script";
import ReactDOM from 'react-dom';
import graphql from "graphql";

import Modal from '../components/Modal';
import Credits from '../components/Credits';
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

    let futureScreenings = posts.filter(post => {
      let today = new Date();
      let screeningDate = new Date(post.node.frontmatter.date);

      let isScreeningDateInFuture = compareAsc(
        today,
        screeningDate
      );

      return (post.node.frontmatter.templateKey === "blog-post" && !isScreeningDateInFuture);
    });

    return (
      <section className="section">
        <div className="vh-100 relative z-0 bg-black">
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
              <h1 className="f-subheadline-l f1 lh-solid white mt4">Careful<br />
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
        <div className="container pv5 bg-blue">
          <div className="fluid-width center">
            <p className="lh-copy white f2-l f3 tc mt5">Upcoming Screenings</p>

            <div className="flex items-start content-start justify-center mv5">
              <div className="mw7 center pa5">
                {futureScreenings.length ? futureScreenings.map(({ node: post }, index) => {
                  return(<div key={`screening-${index}`} className="screening mb5">
                    <h4 className="lh-copy black f7">{post.frontmatter.date}</h4>
                    <h2 className="lh-copy black f3">{post.frontmatter.date}</h2>
                    <h3 className="lh-copy black f7">{post.frontmatter.date}</h3>
                    {post.frontmatter.date ? (<a className="lh-copy white-90 f7 mt3 dib ttu" target="_blank" href="">View Info →</a>) : null}
                  </div>);
                }) : (<h4 className="white-50 f4 tc">None At This Time</h4>)}

              </div>
            </div>
          </div>
        </div>
        <div className="fluid-width center">

          <div className="flex-l items-start content-start justify-between mt5">
            <div className="w-100 w-30-l pa5-l flex-l items-start content-start justify-end">
              <p className="lh-copy black f3 dib section-title mb4 mb0-l">Synopsis</p>
            </div>
            <div className="w-100 w-70-l pa5-l">
              <p className="lh-copy black f3">It is about an abortion doctor whose clinic has been temporarily shut down by restrictive state laws and how she spends her days driving a taxi cab until it reopens.</p>
            </div>
          </div>

          <Credits />

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
