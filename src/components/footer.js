import React from 'react';
import Img from 'gatsby-image';
import {StaticQuery, graphql} from'gatsby';

export default () => (
   <StaticQuery
        query={graphql`
        query Footer{
            contentfulFooter{
                  copyright
                  iconLogo{
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
                  contactUs{
                    href
                  }
                }
              }`
    }
        render={data=>(
            <div>

            <small>{data.contentfulFooter.copyright}</small>
            <Img fixed={data.contentfulFooter.iconLogo.fixed}/>
            <a href="localhost:8000/{data.contentFulFooter.href}">Contact Us</a>


            </div>
        )}
   />
);