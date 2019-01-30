const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const BlogPost = path.resolve(`./src/templates/post.js`)
    const SecondaryContent = path.resolve(`./src/templates/post2.js`)

    
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
              blogCategories {
                tagType
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: BlogPost,
          context: {
            slug: node.slug,
            tagType: node.blogCategories.tagType,
            
          },
        })
      })
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: 'test/'+ node.slug +'',
          component: SecondaryContent,
          context: {
            slug: node.slug,
            tagType: node.blogCategories.tagType,
            
          },
        })
      })
      resolve()
    })
  
  })
}
