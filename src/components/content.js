import React from 'react';
import Img from 'gatsby-image';
import {StaticQuery, graphql, Link} from'gatsby';
import styled from 'styled-components';
import { Button } from 'styled-button-component/lib/components/Button';

const containerStyle = {
  float: 'right'
};

const linkStyle = {
    color: 'gray',
    'text-decoration': 'none'
  };

export default props => (
  <StaticQuery
    query={graphql`
      query BlogPosts {
        props: allContentfulBlogPost(
          sort: { fields: [createdAt], order: DESC }
        ) {
          edges {
            node {
                previewContent{
                    previewContent
                  }
              createdAt
              title
              date(formatString: "Do MMMM YYYY")
              content {
                content
              }
              image {
                fixed(height: 200) {
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
              slug
            }
          }
        }

        filteredByOldest: allContentfulBlogPost(
          sort: { fields: [createdAt], order: ASC }
        ) {
          edges {
            node {
              createdAt
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
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {console.log(data[props])}
        {console.log(data.filteredByOldest)}
        {data.filteredByOldest.edges.map(({ node }) => (
          <div key={node.id}>
            <Link style={linkStyle} to={node.slug}>
              <div>
                {' '}
                <br />
                <br />
                <h2>{node.title}</h2>
                <small>
                Created by {node.authorName[0].name} on {node.date}
              </small>
                <Img style={containerStyle} fixed={node.image.fixed} />
              </div>
            </Link>
            <div>
              <br />
              <br />
              {node.previewContent.previewContent}
              <br />
              <br />
              <Button>Read More</Button>
              <br />
              <br />
              <hr></hr>
              
            </div>
          </div>
        ))}
      </div>
    )}
  />
)