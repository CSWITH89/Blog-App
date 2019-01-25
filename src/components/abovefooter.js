import React, {Fragment} from 'react'
import { graphql, Link, StaticQuery } from 'gatsby';

export default abovefooter (
<StaticQuery
query={graphql`
        query singleSlug {
            contentfulBlogPost {
                slug
            }
        }
`}

  render={data=>(
    <Fragment>
      <div>
              <div>Return to top <Link to={data.contentfulBlogPost.slug}></Link></div>
        {/* <div>Go back<Link to="/"></Link></div> */}
      </div>
    </Fragment>
  )}

/
>
)