import React from 'react';
import Img from 'gatsby-image';
import {StaticQuery, graphql, Link} from'gatsby';

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
          <Link key={node.id} to={node.slug}>
            <div>
              {' '}
              <br />
              <br />
              <h2>{node.title}</h2>
              {/* <Img fixed={node.image.fixed} /> */}
              <br />
              <br />
              {node.content.content}
              <br />
              <br />
              <small>
                Created by {node.authorName[0].name} on {node.date}
              </small>
            </div>
          </Link>
        ))}
      </div>
    )}
  />
)