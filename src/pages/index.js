import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello, World</h1>
    <p>This is a test blog using Netlify CMS</p>

    <Link to="/blog/">Go to blog</Link>
  </Layout>
)

export default IndexPage
