import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageTwo = () => (
  <Layout>
    <SEO title="Page two" />
    <h3 className="mb-5">2. Split to Triggers vs Actors</h3>
    <p>
      Some categories <b>typically serve as triggers</b> for all kinds of
      actions, be it a user action, another device action, or anything else.
      Typical example would be <b>a smoke detector.</b>
    </p>
    <p>
      Other categories are on the other hand <b>typical actors</b>, meaning they
      perform an action based on some trigger, be it user interaction or other
      device input. Typical actor is <b>a sirene</b>.
    </p>
    <p>
      As a result, we have <b>16 triggers and 7 actors</b> (where one type of
      devices can typically serve as both: a door lock).
    </p>
    <p>
      There are a few slightly specific and important trigger categories worth
      special explanation:
    </p>
    <h6>Switch on/off</h6>
    <p>
      This can mean a classic wall flip-switch, but it can also be a button that
      the user taps in the mobile application. From the perspective of their
      usage they are basically equal: you can use both to turn the light on/off,
      trigger a scene, etc. This will be important later in this document.
    </p>
    <h6>Value setter</h6>
    <p>
      A typical example would be a manually controlled dimmer on some lamps, but
      it could as well be a slider in the mobile app. Value setter category also
      encompasses a more generic controls, e.g. picking a song to play on Sonos
      speaker, choosing a TV program, choosing washing machine program...
    </p>
    <h6>Timer</h6>
    <p>A classic trigger for all kinds of events</p>
    <h6>Location</h6>
    <p>
      A trigger based on user location. Typically coming home, leaving home,
      coming to work, etc.
    </p>
    <p>The following table shows the categorized devices:</p>
    <iframe
      title="page-two-table"
      className="airtable-embed"
      src="https://airtable.com/embed/shrxxv5jXQybPwd3s?backgroundColor=gray&viewControls=on"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style={{ background: "transparent", border: "1px solid #ccc" }}
    />
    <Link to="/3-generate-all-combinations/">Next page</Link>
    <br />
    <Link to="/1-categorize-devices/">Previous Page</Link>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageTwo
