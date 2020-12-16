import { Link } from "gatsby"
import React from "react"
import { DarkModeToggle, Footer, SignupForm } from "../components"
import { useDarkMode } from "../hooks"

export const LayoutFull = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useDarkMode()

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-transparent py-6">
        <div className="container text-center">
          <div className="relative">
            <Link to="/" className="inline-block">
              <img alt="Logo" src="/logo.svg" />
            </Link>

            <div className="absolute top-0 right-0">
              <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} />
            </div>
          </div>
        </div>
      </header>
      {children}
      <div className="bg-white dark:bg-transparent border-t border-b border-transparent py-8 lg:py-16 mt-8">
        <div className="container">
          <SignupForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
