import React, {Fragment} from 'react'
import { graphql, Link, StaticQuery } from 'gatsby';

export default props => (
  <StaticQuery
    query={graphql`
      query singleSlug {
        contentfulBlogPost {
          slug
        }
      }
    `}
    render={data => (
      <Fragment>
        <div>
          <Link to={props.returnTop}>
            <div>{props.returnTopText} </div>
          </Link>
          <Link to={props.goBackLink}>
            <div>{props.goBackText} </div>
          </Link>
        </div>
      </Fragment>
    )}
  />
)