import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageThree = () => (
  <Layout>
    <SEO title="Page three" />
    <h3 className="mb-5">3. Generate all Combinations</h3>
    <p>
      16 triggers times 7 actors is <b>112 combinations</b>.
    </p>
    <p>
      These 112 combinations already give us quite a complete and also granular
      overview of <b>most use cases</b> that can be realized in a smart home.
    </p>
    <iframe
      title="page-three-airtable"
      className="airtable-embed"
      src="https://airtable.com/embed/shr5pVxGKnHPqjTjF?backgroundColor=gray&viewControls=on"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style={{ background: "transparent", border: "1px solid #ccc" }}
    />
    <Link to="/4-rate-all-combinations/">Next page</Link>
    <br />
    <Link to="/2-split-to-triggers-vs-actors/">Previous Page</Link>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageThree
