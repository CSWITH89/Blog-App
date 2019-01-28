import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Img from 'gatsby-image';
import {StaticQuery, graphql, Link} from'gatsby';

export default () => (
  <div>
    <Header headerText="General Posts" />
    <StaticQuery
      query={graphql`
        query allGeneralPosts {
          allContentfulBlogPost(
            filter: {
              blogCategories: { elemMatch: { tagType: { in: ["general"] } } }
            }
          ) {
            edges {
              node {
                title
                date(formatString: "Do MMMM YYYY")
                slug
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
          }
        }
      `}
      render={data => (
        <div>
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.slug}>
                <div>
                  {' '}
                  <br />
                  <br />
                  <h2>{node.title}</h2>
                  <Img fixed={node.image.fixed} />
                </div>
              </Link>
              <div>
                <br />
                <br />
                {node.content.content}
                <br />
                <br />
                <small>
                  Created by {node.authorName[0].name} on {node.date}
                </small>

                <br />
                <br />
                <br />
                <b>Tags for this post: </b>
                {node.blogCategories.map(x => (
                  <li>
                    <Link to={x.tagType}>
                      <div>{x.tagType}</div>
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    />
    <Footer />
  </div>
)