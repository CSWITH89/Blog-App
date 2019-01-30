import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import Img from 'gatsby-image'
//import { createHistory } from '@reach/router';

export default ({ data }) => (
  <div>
    <h1>Test Page</h1>
         
  </div>
)

export const newPostQuery = graphql`
         query newPost($slug: String!) {
           contentfulBlogPost(slug: { eq: $slug }) {
             title
             slug
             date(formatString: "Do MMMM YYYY")
             content {
               content
             }
             authorName {
               name
             }
             blogCategories {
               tagType
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
           }
         }
       `
