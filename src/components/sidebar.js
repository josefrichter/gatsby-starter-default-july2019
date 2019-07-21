import { Link } from "gatsby"
import React from "react"

const Sidebar = () => (
  <nav className="sidebar mb-5">
    <ul className="pageslist">
      <li>
        <Link to="/">Introduction to packages</Link>
      </li>
      <li>
        <Link to="/1-categorize-devices/">1. Categorize devices</Link>
      </li>
      <li>
        <Link to="/2-split-to-triggers-vs-actors/">
          2. Split to triggers vs actors
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
  </nav>
)

export default Sidebar
