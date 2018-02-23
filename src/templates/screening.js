// import React from 'react';
// import graphql from 'graphql';
// import Helmet from 'react-helmet';
// import Content, { HTMLContent } from '../components/Content';

// export const ScreeningTemplate = ({
//   content, contentComponent, title, helmet, venue, location, link, poster
// }) => {
//   const PostContent = contentComponent || Content;

//   return (
//     <section className="section">
//       { helmet || ''}
//       <div className="container content">
//         <div className="columns">
//           <div className="column is-10 is-offset-1">
//             <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
//             <p>{venue}</p>
//             <p>{location}</p>
//             <p>{link}</p>
//             <p>{poster}</p>
//             <PostContent content={content} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ({ data }) => {
//   const { markdownRemark: post } = data;

//   return (<ScreeningTemplate
//     content={post.html}
//     contentComponent={HTMLContent}
//     helmet={<Helmet title={`Screening | ${post.frontmatter.title}`} />}
//     title={post.frontmatter.title}
//     venue={post.frontmatter.venue}
//     location={post.frontmatter.location}
//     link={post.frontmatter.link}
//     poster={post.frontmatter.poster}
//   />);
// };

// export const pageQuery = graphql`
//   query ScreeningByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//         date(formatString: "MMMM DD, YYYY")
//         venue
//         location
//         link
//         poster
//       }
//     }
//   }
// `;

// // - name: "blog"
// //     label: "Blog"
// //     folder: "src/pages/blog"
// //     create: true
// //     slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
// //     fields:
// //       - {label: "Template Key", name: "templateKey", widget: "hidden", default: "blog-post"}
// //       - {label: "Path", name: "path", widget: "string"}
// //       - {label: "Title", name: "title", widget: "string"}
// //       - {label: "Publish Date", name: "date", widget: "datetime"}
// //       - {label: "Description", name: "description", widget: "text"}
// //       - {label: "Body", name: "body", widget: "markdown"}
// //   - name: "screenings"
// //     label: "Screenings"
// //     folder: "src/pages/screenings"
// //     create: true
// //     slug: "{{slug}}"
// //     fields:
// //       - {label: "Template Key", name: "templateKey", widget: "hidden", default: "screening"}
// //       - {label: "Path", name: "path", widget: "string"}
// //       - {label: "Venue", name: "venue", widget: "string"}
// //       - {label: "Location", name: "location", widget: "string"}
// //       - {label: "Date", name: "date", widget: "datetime"}
// //       - {label: "Link", name: link, widget: "string", required: false}
// //       - {label: "Poster", name: poster, widget: "image", required: false}
