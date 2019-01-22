import React from 'react'
import { graphql, StaticQuery } from 'gatsby'


export const Header = () => <StaticQuery query={graphql`
             query header {
               allContentfulHeader {
                 edges {
                   node {
                     name
                     title {
                       href
                     }
                     home {
                       href
                     }
                     about {
                       href
                     }
                   }
                 }
               }
             }
           `} render={data => 
             
               <h1>{data.allContentfulHeader.name}</h1>
             } />

  // <div
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </div>

