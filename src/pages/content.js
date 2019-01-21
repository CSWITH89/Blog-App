import React , { Component } from 'react'
import Img from 'gatsby-image'
import { graphql} from 'gatsby'

class Content extends Component{
    
    render() {
    return(

     data => (

        <div>
            {data.allContentfulBlogPost.edges.map(({ node }) => (
                <div key={node.id}>
                    <h3>
                        {node.title}
                    </h3>
                    <br />
                    <br />
                    <h3>{node.content.content}</h3>
                    <br />
                    <Img fixed={node.image.fixed} /><br />
                    <br />
                    <small>Created by {node.authorName[0].name}</small>
                    <br />
                    <br />
                    <small>Created on {node.date}</small><br />
                    <br />
                    <br />
                </div>
            ))}

        </div>
    )

    )
    }
}
    


export const query = graphql`
  query Post {
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
`

export default Content