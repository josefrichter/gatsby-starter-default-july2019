import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageSix = () => (
  <Layout>
    <SEO title="Page six" />
    <h3 className="mb-5">6. Scenes for given Packages</h3>
    <p>
      It becomes apparent from the data, that scenes and rules/automations are
      pretty much the same thing.
      <b> A scene is basically a rule, that is triggered "manually" </b>,
      meaning by a switch or value setter. But the underlying logic does not
      differ from rules triggered by other devices.
    </p>
    <p>
      It also becomes apparent some devices state is typically changed at the
      same time - e.g. devices turned off when leaving the house or going to
      sleep, etc.
    </p>
    <img
      alt="app concept screenshots"
      className="img-fluid mb-5"
      src="https://ucarecdn.com/a694c12d-59b0-4b4d-8302-67f95f20a7d7/-/resize/1000x/1.jpg"
      srcset="
        https://ucarecdn.com/a694c12d-59b0-4b4d-8302-67f95f20a7d7/-/resize/2000x/-/quality/lightest/1.jpg 2x
    "
    />
    <Link to="/7-design-templates/">Next page</Link>
    <br />
    <Link to="/5-cluster-useful-combinations/">Previous Page</Link>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageSix
