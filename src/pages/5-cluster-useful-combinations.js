import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageFive = () => (
  <Layout>
    <SEO title="Page five" />
    <h3 class="mb-5">Cluster useful Combinations</h3>
    <p>
      It is obvious from the list of useful combinations, that
      <b> some of them are very similar </b>, e.g. smoke detector triggers
      alarm, CO detector triggers alarm, etc.
    </p>
    <p>
      Based on these similarities, we can come up with some{" "}
      <b>initial packages of devices that naturally complement each other</b>
      and therefore provide some sort of synergy and added value for the user.
    </p>
    <iframe
      title="page-five-airtable"
      class="airtable-embed mb-3"
      src="https://airtable.com/embed/shrlCnRgGvPhiHSro?backgroundColor=gray&viewControls=on"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style={{ background: "transparent", border: "1px solid #ccc" }}
    />
    <br />
    <p>
      These packages are clustered mostly empirically. It's a bit of
      simplification and shortcut from further categorizing into
      security/ambiance/ecology/etc. subcategories and deriving the packages
      even more systematically. But we believe that at this point we already
      have <b>a very solid set of basic packages fulfilling the purpose</b> set
      out at the beginning of the document - i.e. come up with meaningful and
      useful (but not necessarily absolutely perfect) packages, that can improve
      the UX design process of the product.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageFive
