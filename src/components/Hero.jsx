import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

export const Hero = props => {
  const { description, image, tag, title } = props

  return (
    <div className="container mt-12">
      <div className="flex relative rounded-md overflow-hidden bg-blue-400">
        <Img
          alt={title}
          className="grayscale-1 blend-multiply"
          fadeIn={false}
          fixed={[
            { ...image.childImageSharp.desktop, media: `(min-width: 768px)` },
            { ...image.childImageSharp.mobile, media: `(max-width: 767px)` },
          ]}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(49, 130, 206, 0) 24%, rgba(49, 130, 206, .5) 100%)",
          }}
        ></div>

        <span className="absolute top-0 right-0 bg-blue-700 text-sm text-white font-medium px-3 py-1 rounded-lg m-4 tracking-wide">
          {tag}
        </span>

        <div className="absolute bottom-0 inset-x-0 p-5 lg:p-6 text-white">
          <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
            {title}
          </h1>
          <h3 className="text-lg font-medium md:w-2/3">{description}</h3>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    childImageSharp: PropTypes.shape({
      desktop: PropTypes.object.isRequired,
      mobile: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export const query = graphql`
  fragment HeroImageFragment on File {
    url: publicURL
    childImageSharp {
      mobile: fixed(width: 768, height: 240, quality: 80, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed_withWebp
      }
      desktop: fixed(width: 1248, height: 280, quality: 85, cropFocus: SOUTH) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`
