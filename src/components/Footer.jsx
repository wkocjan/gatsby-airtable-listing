import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"

export const Footer = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            contact
            facebook
            linkedin
            twitter
          }
        }
      }
    }
  `)

  return (
    <footer className="bg-white">
      <div className="container pt-12 pb-12 flex flex-wrap text-center lg:flex-row-reverse lg:justify-between lg:items-center">
        <ul className="w-full lg:w-auto">
          <FooterIconLink
            href={links.facebook}
            icon={FaFacebookF}
            label="Facebook"
          />
          <FooterIconLink
            href={links.twitter}
            icon={FaTwitter}
            label="Twitter"
          />
          <FooterIconLink
            href={links.linkedin}
            icon={FaLinkedinIn}
            label="LinkedIn"
          />
          <FooterIconLink
            href={links.contact}
            icon={FaEnvelope}
            label="E-mail"
          />
        </ul>
        <div className="w-full lg:w-auto pt-6 lg:pt-0 text-blue-800 text-sm">
          &copy; 2020 All rights reserved.
        </div>
      </div>
    </footer>
  )
}

const FooterIconLink = ({ href, label, icon: Icon }) => {
  const linkParams = { href }

  if (href.startsWith("http")) {
    linkParams.target = "_blank"
    linkParams.rel = "noreferrer noopener"
  }

  return (
    <li className="inline-block px-2">
      <a
        {...linkParams}
        className="inline-flex h-8 w-8 border border-blue-800 text-blue-800 rounded-full items-center justify-center transition-colors duration-200 hover:text-white hover:bg-blue-400 hover:border-blue-400"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-3 h-3 fill-current" />
      </a>
    </li>
  )
}
