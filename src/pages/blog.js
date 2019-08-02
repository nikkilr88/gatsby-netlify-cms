import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges.map(edge => (
    <div key={edge.node.id}>
      <h2>{edge.node.frontmatter.title}</h2>
      <p>{edge.node.frontmatter.date}</p>
      <p>{edge.node.excerpt}</p>
      <Link to={`/blog${edge.node.fields.slug}`}>Read more</Link>
    </div>
  ))

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {posts}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
