import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageEight = () => (
  <Layout>
    <SEO title="Page eight" />
    <h3 className="mb-5">8. Functional Prototype</h3>
    <p>
      We created a sample functional prototype in Framer X. This prototype is
      fetching all the above data about devices, scenes and rules from Airtable
      via its API. Currently the prototype lets you select any package of
      devices and then immediately return a list of all meaningful scenes and
      rules for the given package.
    </p>
    <p>
      This is a proof of concept that this systematic approach can help provide
    </p>
    <ol>
      <li>
        <b>more meaningful recommendations</b> for smarthome users
      </li>
      <li>
        <b>pre-confirgured scenes and rules</b> that can work out of the box,
        rather than requiring user to manually set them up
      </li>
    </ol>
    <img
      alt="prototype screenshot"
      className="img-fluid"
      src="https://ucarecdn.com/2add1af1-18ff-4fce-a393-d2b0a6e0afe4/-/resize/1000x/1.jpg"
      srcset="
        https://ucarecdn.com/2add1af1-18ff-4fce-a393-d2b0a6e0afe4/-/resize/2000x/-/quality/lightest/1.jpg 2x
    "
    />
    <p className="mb-5">
      <a href="https://clever-nobel-7335ab.netlify.com">
        Link: Functional Prototype
      </a>
    </p>
    <Link to="/7-design-templates/">Previous Page</Link>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageEight
