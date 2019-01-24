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
                           fixed(width: 25, height: 25){
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
                <br/>
                <br/>
            <Img fixed={data.contentfulFooter.iconLogo.fixed}/>
            <span>   </span>
            <small>{data.contentfulFooter.copyright}</small>
            <span>   </span>
            <a href={data.contentfulFooter.contactUs.href}>Contact Us</a>
            </div>
        )}
   />
);