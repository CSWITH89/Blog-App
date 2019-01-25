import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
//import { createHistory } from '@reach/router';

export default ({ data }) => (
  <div>
    {' '}
    <Header headerText={data.contentfulBlogPost.title} />
    <div>{data.contentfulBlogPost.content.content}</div>
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
<br></br>
<div>Tags for this post: <br></br>
    <ul>
        {data.contentfulBlogPost.blogCategories.map(x => <li><Link to={x.tagType}><div>{x.tagType}</div></Link></li>)}
    </ul>
    </div>

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
