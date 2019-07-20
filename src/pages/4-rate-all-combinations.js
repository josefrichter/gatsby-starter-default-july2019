import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageFour = () => (
  <Layout>
    <SEO title="Page four" />
    <h3 class="mb-5">Rate all Combinations</h3>
    <p>
      Just by looking at the 112 combinations, it immediately becomes obvious,
      that <b>some of them are potentially very useful</b> (e.g. smoke detector
      triggers alarm), while <b>others are almost useless</b> (smoke detector
      triggers music player).
    </p>
    <p>
      At this step, due to <b>lack of data</b>, we add ratings based on
      experience on a best-guess basis. The rating of usefulness of individual
      combinations is a great candidate for collection of big data and deriving
      more precise rating from it.
    </p>
    <iframe
      title="page-four-airtable"
      class="airtable-embed"
      src="https://airtable.com/embed/shrdDuDVFhXgFjVFs?backgroundColor=gray&viewControls=on"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style={{ background: "transparent", border: "1px solid #ccc" }}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageFour
