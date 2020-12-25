import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="ALEX Construction Materials"
        description="Check the most popular construction material from the best places in Titilagarh"
        image={data.hero.url}
      />

      <Hero
        image={data.hero}
        tag="#alex, #construction-material"
        title="ALEX Construction Materials"
        description="Check the most popular construction material from the best places in Titilagarh"
      />

      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    hero: file(relativePath: { eq: "hero-travel.jpg" }) {
      ...HeroImageFragment
    }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          material
          image {
            ...CardImageFragment
          }
          name
          slug
          summary
        }
      }
    }
  }
`
