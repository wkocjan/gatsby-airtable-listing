import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="ALEX Construction Materials"
        description="Providing Construction Material anywhere in India at right price. ✆ 9348210687"
        image={data.hero.url}
      />

      <Hero
        image={data.hero}
        tag="#alex, #construction-material"
        title="Delivering Construction Materials anywhere in India"
        description="Most popular construction materials at right price. ✆ 9348210687"
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
