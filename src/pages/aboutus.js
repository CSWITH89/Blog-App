import React, { Fragment } from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Header from '../components/header'
import Footer from '../components/footer'

export default ({data}) => { 
    return <>
        <Header headerText="About Us" />
        {data.allContentfulAboutUs.edges.map(({ node }) => (
          <Fragment key={node.id}>
            <div>
              <h2>{node.name}</h2>
            </div>
            <div>
              {node.content.content}
              </div>
            <div>
              {' '}
              <Img fixed={node.authorref1.avatar.fixed} />
              {node.authorref1.name}
            </div>

            <div>
              <Img fixed={node.authorref2.avatar.fixed} />
              {node.authorref2.name}

            </div>
          </Fragment>
        ))}
        <Footer />
      </>

    }

export const query = graphql`
         query {
           allContentfulAboutUs {
             edges {
               node {
                 name
                 content {
                   content
                 }
                 authorref1 {
                   name
                   avatar {
                     fixed(width: 70, height: 100) {
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
                 authorref2 {
                   name
                   avatar {
                     fixed(width: 70, height: 100) {
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
               }
             }
           }
         }
       `