import React, { Fragment } from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Header from '../components/header'
import Footer from '../components/footer'
import Abovefooter from "../components/abovefooter";

export default ({data}) => { 
    return <>
        <Header headerText="About Us" />
        {data.allContentfulAboutUs.edges.map(({ node }) => (
          <Fragment key={node.id}>
            <div>{node.content.content}</div>
            <div>
              {' '}
              <Img fixed={node.authorref1.avatar.fixed} />
              {node.authorref1.name}
            </div>
            <br />
            <div>
              <Img fixed={node.authorref2.avatar.fixed} />
              {node.authorref2.name}
            </div>
            {/* # Look at this Video:
            `youtube:https://www.youtube.com/embed/2Xc9gXyf2G4` */}

          <br></br><br></br>  <div>       We made this video: <br></br>     <iframe
              title="test"
              src="https://www.youtube.com/embed/b2H7fWhQcdE"
              width="600"
              height="400"
            /></div>

          </Fragment>
        ))}

        <Abovefooter returnTop="/aboutus" returnTopText="Return to top" goBackLink="/" goBackText="Home" />
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