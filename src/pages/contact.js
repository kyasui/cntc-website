import React from "react";
import { Link, withPrefix } from "gatsby-link";
import Script from "react-load-script";
import ReactDOM from 'react-dom';
import graphql from "graphql";

export default class ScreeningsPage extends React.Component {
  render() {
    let thanks = 'http://localhost:8000/contact?success'
    console.log('hello', this.props.location.search.includes('success'));
    return (
      <section className="pv3 mv5 min-h">
        <div className="fluid-width w-100 center mv5">
          {this.props.location.search.includes('success')
            ? [
                <h3 className="lh-copy black f2 tc pt5 mt5 center">Thanks for contacting us!</h3>,
                <p className="lh-copy black-50 f4 tc mt2">We'll get back to you shortly</p>
              ]
            : [
                <h3 className="lh-copy black f2 tc mt5 section-title dib center mb4">Contact Us</h3>,
                <form action="https://formspree.io/yasui.kei@gmail.com" method="POST">
                  <div className="mv3">
                    <input className="pa3 f4 br1 bn w-100 bg-black-10" type="text" name="name" placeholder="Your Name" />
                  </div>
                  <div className="mv3">
                    <input className="pa3 f4 br1 bn w-100 bg-black-10" type="email" name="_replyto" placeholder="Your Email" />
                  </div>
                  <div className="mv3">
                    <textarea className="pa3 f4 br1 bn w-100 bg-black-10 text-area" name="message" placeholder="Your Message"></textarea>
                  </div>
                  <div className="mv3">
                    <input type="hidden" name="_next" value={thanks} />
                    <input className="button blue-button bn center dib pointer" type="submit" value="Send" />
                  </div>
                </form>
              ]}
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query ContactPageQuery {
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
