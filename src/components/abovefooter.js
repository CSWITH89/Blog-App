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
                <Link to={props.returnTop}><div>Return to top </div></Link>
                <Link to={props.goBack}><div>{props.backText} </div></Link>
        </div>
      </Fragment>
    )}
  />
)