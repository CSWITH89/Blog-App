import React, { Fragment } from 'react'
import { graphql, StaticQuery } from 'gatsby'



export default () => (

 

<StaticQuery query={graphql`
             query header {
            contentfulHeader{

                  name
                  title{
                    href
                  }
                  home{
                    href
                  }
                  about{
                    href
                  } 
                  
                }
              }
             `}

             
             
            render={data => 
            <Fragment>
            <h1>
               {data.contentfulHeader.name}
             </h1>
             <a href={data.contentfulHeader.title.href}>"{data.contentfulHeader.title[0]}"</a>
             <a href={data.contentfulHeader.about.href}>"{data.contentfulHeader.about[0]}"</a>
              </Fragment>
             } />

)

