import { Link } from "gatsby"
import React from "react"
import { Footer, SignupForm } from "../components"

export const LayoutFull = ({ children }) => {
  return (
    <>
      <header className="bg-white py-6">
        <div className="container text-center">
          <Link to="/" className="inline-block">
            <img alt="Logo" src="/logo.svg" />
          </Link>
        </div>
      </header>
      {children}
      <div className="bg-white py-8 lg:py-16 mt-8">
        <div className="container">
          <SignupForm />
        </div>
      </div>
      <Footer />
    </>
  )
}
