import React from 'react'
import { graphql, Link } from 'gatsby';

export default ({data}) => (
    <div>{data.contentfulBlogPost.title}</div>
)

export const singlePostQuery = graphql`
query singlePost($slug: String!){
    contentfulBlogPost(slug: { eq: $slug }){
        title
        slug
    }
}
`