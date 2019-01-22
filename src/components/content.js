import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
    <StaticQuery
        query={graphql`
       query BlogPosts{
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

        }
        render={data => (
            <div>
                <h1>Test Blog</h1>
                {data.allContentfulBlogPost.edges.map(({ node }) => (
                    <div key={node.id}>
                        <h3>
                            {node.title}
                        </h3>
                        <small>Created on {node.date}</small><br />
                        <Img fixed={node.image.fixed} /><br />
                        <br />
                        <br />
                        <h3>{node.content.content}</h3>
                        <br />
                        <br />
                        <small>Created by {node.authorName[0].name}</small>
                    </div>
                ))}
            </div>

        )

        }
    />
); 