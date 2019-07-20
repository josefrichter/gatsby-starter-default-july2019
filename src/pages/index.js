import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3 class="mb-5">Introduction to Packages</h3>
    <p>
      The purpose of this work was to come up with{" "}
      <b>realistic combinations of devices (aka. "packages")</b> that would
      deliver <b>meaningful experience to smarthome customers.</b>
    </p>
    <p>
      These packages could then be used in further UX design process. Looking at
      various features and suggestions through the prism of packages should help
      better <b>identify the real pain points</b> of the user experience. With
      packages that can be reasonably expected in the real world, we are able to{" "}
      <b>come up with specific use cases</b>, in the form of scenes and
      rules/automations. And vice versa: sort of reverse-engineering this
      process should help us with{" "}
      <b>user-first approach: first "design" the user experience</b> that we
      want the client to have, and then come up with the technology and software
      to make it happen.
    </p>
    <p>
      There are numerous ways to come up with reasonable packages, typically
      they are empirically based. We tried to <b>find a more systematic way</b>{" "}
      how to come up with them, organize them, come up with scenes and rules,
      rate them, work with them, etc.
    </p>
    <p>
      This document is a step-by-step summary of one of the methods that is
      bringing solid results. Please feel free to leave your comments,
      suggestions or questions.
    </p>
    <ul class="pageslist">
      <li>
        <Link to="/1-categorize-devices/">1. Categorize Devices</Link>
      </li>
      <li>
        <Link to="/2-split-to-triggers-vs-actors/">
          2. Split to Triggers vs Actors
        </Link>
      </li>
      <li>
        <Link to="/3-generate-all-combinations/">
          3. Generate all combinations
        </Link>
      </li>
      <li>
        <Link to="/4-rate-all-combinations/">4. Rate all combinations</Link>
      </li>
      <li>
        <Link to="/5-cluster-useful-combinations/">
          5. Cluster useful combinations
        </Link>
      </li>
      <li>
        <Link to="/6-scenes-for-given-packages/">
          6. Scenes for given packages
        </Link>
      </li>
      <li>
        <Link to="/7-design-templates/">7. Design templates</Link>
      </li>
      <li>
        <Link to="/8-functional-prototype/">8. Functional prototype</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
