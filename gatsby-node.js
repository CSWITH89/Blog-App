const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
          
                slug
              
            }
          }
        }
      }
    `).then(result => {
        result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
                createPage({
                    path: node.slug,
                    component: path.resolve(`./src/templates/post.js`),
                    context: {
                        slug: node.slug,
                    },
                })
            })
            resolve()
        })
    })
}