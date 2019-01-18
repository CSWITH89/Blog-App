import React, { Fragment } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


export default ({ data }) => {
  return (
    <div>
      <h1>Index page</h1>
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.title} <span>— {node.date}</span>
          </h3>
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
        date
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

