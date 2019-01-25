import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import Img from 'gatsby-image'
//import { createHistory } from '@reach/router';

export default ({ data }) => (
  <div>
    {' '}
    <Header headerText={data.contentfulBlogPost.title} />
    <br />
    <Img fixed={data.contentfulBlogPost.image.fixed} />
    <div>{data.contentfulBlogPost.content.content}</div>
    <br />
    <br />
    <small>
      Created by {data.contentfulBlogPost.authorName[0].name} on{' '}
      {data.contentfulBlogPost.date}
    </small>
    <br />
    <br />
    <div>
      Tags for this post: <br />
      <ul>
        {data.contentfulBlogPost.blogCategories.map(x => (
          <li>
            <Link to={x.tagType}>
              <div>{x.tagType}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <br />
    <Link to={data.contentfulBlogPost.slug}>
      <div>Return to top</div>
    </Link>
    <Link to="/">
      <div>Go back</div>
    </Link>
    <Footer />
  </div>
)

export const singlePostQuery = graphql`
         query singlePost($slug: String!) {
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
