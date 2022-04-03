import * as React from "react"
import Layout from "../components/layout"


const contactPage = () => {
  return (
    <Layout pageTitle='Contact' pageHeader='Patrick Burley' pageHeading='Contact me'>
      <p><a href="mailto: patrickburley24@gmail.com">Email me</a></p>
      <textbox></textbox>
    </Layout>
  )
}

export default contactPage
