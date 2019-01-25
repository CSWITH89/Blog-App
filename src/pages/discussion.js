import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
//import Img from 'gatsby-image';
import {StaticQuery, graphql, Link} from'gatsby';

export default () => (
  <div>
    <Header headerText="Discussion Posts" />
      <StaticQuery
         query={graphql`
      query DiscussionPosts {
        allContentfulBlogPost {
          edges {
            node {
              title
              date(formatString: "Do MMMM YYYY")
              content {
                content
              }
              #     image {
              #   fixed {
              #     base64
              #     tracedSVG
              #     aspectRatio
              #     width
              #     height
              #     src
              #     srcSet
              #     srcWebp
              #     srcSetWebp
              #   }
              authorName {
                name
              }
              slug
            }
          }
        }
      }
    `}
         render={data => (
            <div>
               {data.allContentfulBlogPost.edges.map(({ node }) => (
                  <div key={node.id}>
                     <Link to={node.slug}>
                        <div>
                           {' '}
                           <br />
                           <br />
                           <h2>{node.title}</h2>
                           {/* <Img fixed={node.image.fixed} /> */}
                        </div>
                     </Link>
                     <div>
                        <br />
                        <br />
                        {node.content.content}
                        <br />
                        <br />
                        <small>
                           Created by {node.authorName[0].name} on {node.date}
                        </small>
                     </div>
                  </div>
               ))}
            </div>
         )}
      />
    <Footer />
  </div>
  
)