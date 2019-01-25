import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
//import Img from 'gatsby-image';
import {StaticQuery, graphql, Link} from'gatsby';

export default () => (
  <div>
    <Header headerText="General Posts" />
      <StaticQuery
         query={graphql`
         query allGeneralPosts{
            allContentfulBlogPost (filter: {
              blogCategories: { 
                elemMatch: {
                  tagType:{
                    in: ["general"]
                  }
                  
                }
              }
            }) {
              edges{
                node{
                  title
<<<<<<< Updated upstream
                  date(formatString: "Do MMMM YYYY")
=======
                  date
                  slug
>>>>>>> Stashed changes
                  content{
                    content
                  }
                  authorName{
                    name
                  }
                  blogCategories
                  {tagType}
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
                           {/* <Img fixed={node.image.fixed} /> */}
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
                     </div>
                  </div>
               ))}
            </div>
         )}
      />
    <Footer />
  </div>
  
)