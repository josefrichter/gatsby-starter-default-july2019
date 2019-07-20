import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageSeven = () => (
  <Layout>
    <SEO title="Page seven" />
    <h3 class="mb-5">Design Templates</h3>
    <p>
      We came up with templates using the Magenta Design System, that show
      packages and their scenes and rules, so that they can be immediately used
      further in the design process.
    </p>
    <img
      alt="design templates preview"
      class="img-fluid mb-3"
      src="https://ucarecdn.com/842b9f4b-2996-490c-9651-06e5886c9617/-/resize/1000x/1.jpg"
      srcset="
        https://ucarecdn.com/842b9f4b-2996-490c-9651-06e5886c9617/-/resize/2000x/-/quality/lightest/1.jpg 2x
    "
    />
    <p class="mb-5">
      <a href="https://sketch.cloud/s/0x0mj">Link: Sketch Templates</a>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageSeven
