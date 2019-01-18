import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'


export default ({ data }) => {
  return (
    <div>
      <h1>Test Blog</h1>
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.title} 
          </h3>
          <small>Created on {node.date}</small><br/>
          <Img fixed={node.image.fixed}/><br/>
          <br/>
          <br/>
          <h3>{node.content.content}</h3>
          <br/>
          <br/>
          <small>Created by {node.authorName[0].name}</small>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
query Posts{
  allContentfulBlogPost{
    edges{
      node{
        title
        date(formatString: "Do MMMM YYYY")
        content{
          content
        }
        image{
          fixed{
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
        authorName{
          name
        }
        
        
      }
    }
  }
}`

