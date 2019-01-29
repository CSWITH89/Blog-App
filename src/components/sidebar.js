import React from 'react';
import {StaticQuery, graphql, Link } from 'gatsby';


const sidebarStyle = {
    
    'margin-top':'430px',
    padding: '10px',
    width: '400px',
    'background-color': '#B19CD9',
    float: 'right'
  };

  const linkStyle = {
    'text-decoration': 'none'
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
              
              <br/>
                <Link style={linkStyle} to={node.slug}>
                  <div>{node.title}<span> - </span>{node.date}</div>
                </Link>
                <br/>
                
                 
                </div>
              
            ))}
          </div>
         )}
    />
 );