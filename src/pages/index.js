import React, { Fragment } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const HomePage = ({ data }) => {
  return <div>{data.contentfulAuthor.name}</div>
}

export const query = graphql`
         query authourName {
           contentfulAuthor {
             name
           }
         }
       `

export default HomePage
