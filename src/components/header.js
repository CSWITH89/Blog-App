import React, { Fragment } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'



export default (props) => (
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
              fixed(width: 80, height: 80) {
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
      <Fragment>
        <div>
          <Img fixed={data.contentfulHeader.home.icon.fixed} />
          <span> </span>
          <big>
            <a href={data.contentfulHeader.title.href}>
              {data.contentfulHeader.name}
            </a>
          </big>{' '}
          <span> </span>
          <a href={data.contentfulHeader.about.href}>
            {data.contentfulHeader.about.name}
          </a>
        </div>
        <div>
          <h1>{props.headerText}</h1>
        </div>
      </Fragment>
    )}
  />
)

