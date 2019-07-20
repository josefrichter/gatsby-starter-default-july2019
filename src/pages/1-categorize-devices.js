import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageOne = () => (
  <Layout>
    <SEO title="Page one" />
    <h3 class="mb-5">Categorize Devices</h3>
    <p>
      We look at a wide range of smarthome devices available in the market, and
      try to categorize them based on their basic functionality. We identified
      approximately <b>22 basic device kinds.</b>
    </p>
    <p>Here's the list of them:</p>
    <iframe
      title="list-of-device-kinds"
      class="airtable-embed"
      src="https://airtable.com/embed/shr9JgjjFUT7I5np1?backgroundColor=gray&viewControls=on"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style={{ background: "transparent", border: "1px solid #ccc" }}
    />
    <p>
      As you can see, there's for example one general category "light" that is
      all-encompassing and includes all kinds of bulbs, lamps, led strips, etc.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageOne
