import React from 'react';
import {StaticQuery, graphql, Link } from 'gatsby';


const sidebarStyle = {
    width: '500px',
    border: '2px solid black'
  };

export default () => (
    <StaticQuery
         query={graphql`
         query allSidebarPosts {
            allContentfulBlogPost{
              edges{
                node{
                  title
                  slug
                  date(formatString: "MM/YY")
                }
              }
            }
          }`
     }
         render={data=>(
 
            <div style={sidebarStyle}>
            {data.allContentfulBlogPost.edges.map(({ node }) => (
              <div key={node.id}>
                <Link to={node.slug}>
                  <div>{node.title}<span> - </span>{node.date}</div>
                </Link>
                
                 
                </div>
              
            ))}
          </div>
         )}
    />
 );