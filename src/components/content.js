import React from 'react';
import Img from 'gatsby-image';
import {StaticQuery, graphql} from'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query BlogPosts {
        allContentfulBlogPost {
          edges {
            node {
              title
              date(formatString: "Do MMMM YYYY")
              content {
                content
              }
              image {
                fixed {
                  base64
                  tracedSVG
                  aspectRatio
                  width
                  height
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              authorName {
                name
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <div key={node.id}>
            {' '}
            <br />
            <br />
            <h2>{node.title}</h2>
            <Img fixed={node.image.fixed} />
            <br />
            <br />
            {node.content.content}
            <br />
            <br />
            <small>
              Created by {node.authorName[0].name} on {node.date}
            </small>
          </div>
        ))}
      </div>
    )}
  />
)