import React, { Fragment, Component } from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'
import Content from '../components/content'

export default class index extends React.Component{
  render(){
    return(
      <Content />
    )
  }
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

