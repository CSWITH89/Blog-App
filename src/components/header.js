import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'



export default () => (
  <StaticQuery
    query={graphql`
      query header {
        contentfulHeader {
          name
          title {
            name
            href
          }
          home {
            name
            href
            icon {
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
          about {
            name
            href
          }
        }
      }
    `}
    render={data => (
      <div>
        <Img fixed = {data.contentfulHeader.home.icon.fixed}/>
        <a href={data.contentfulHeader.title.href}>
          {data.contentfulHeader.name}
        </a>
        <a href={data.contentfulHeader.about.href}>
          {data.contentfulHeader.about.name}
        </a>
      </div>
    )}
  />
)

