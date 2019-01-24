import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

export default ({ data }) => (
  <div>
    {' '}
    <Header headerText={data.contentfulBlogPost.title} />
    <div>{data.contentfulBlogPost.content.content}</div>
    <br />
    <br />
    {/* <Link>
      <Link to={data.contentfulBlogPost.blogCategories[0].tagType}>
        <div>{data.contentfulBlogPost.blogCategories[0].tagType}</div>
      </Link>
      <Link to={data.contentfulBlogPost.blogCategories}>
        <div>{data.contentfulBlogPost.blogCategories[1].tagType}</div>
      </Link>
    </Link> */}
    <br />
    <br />
    <small>
      Created by {data.contentfulBlogPost.authorName[0].name} on{' '}
      {data.contentfulBlogPost.date}
    </small>
    <Link to={data.contentfulBlogPost.slug}>
      <div>Return to top</div>
    </Link>
    <Link to="/">
      <div>Go back</div>
    </Link>
     {/* <p>{data.contentfulBlogPost.blogCategories}</p> */}
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
    }
  }
`
