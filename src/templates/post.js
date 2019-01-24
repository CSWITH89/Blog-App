import React from 'react'
import { graphql, Link } from 'gatsby';
import Header from '../components/header'
import Footer from '../components/footer'


export default ({ data }) => (
  <div>
    <Link to={data.contentfulBlogPost.slug}>
      {' '}
      <Header headerText={data.contentfulBlogPost.title} />
    </Link>

    <div />
    <div>{data.contentfulBlogPost.title}</div>
    <div>{data.contentfulBlogPost.content.content}</div>
    <br />
    <br />
    <small>
      Created by {data.contentfulBlogPost.authorName[0].name} on{' '} {data.contentfulBlogPost.date}
    </small>

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
           }
         }
       `