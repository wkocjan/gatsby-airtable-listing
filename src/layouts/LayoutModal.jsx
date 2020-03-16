import { navigate } from "gatsby"
import { Link } from "gatsby-plugin-modal-routing"
import React, { useEffect } from "react"
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa"

export const LayoutModal = ({ children, closeTo, navigation = {} }) => {
  const { current = -1, items = [] } = navigation
  const previous = items[current - 1] ? items[current - 1] : null
  const next = items[current + 1] ? items[current + 1] : null

  const closeModal = () => {
    navigate(closeTo, { state: { noScroll: true } })
  }

  const goPrevious = () => {
    if (!previous) {
      return
    }
    navigate(previous, {
      state: { navigation: { current: current - 1, items }, modal: true },
    })
  }

  const goNext = () => {
    if (!next) {
      return
    }
    navigate(next, {
      state: { navigation: { current: current + 1, items }, modal: true },
    })
  }

  const keyboardNavigation = event => {
    switch (event.keyCode) {
      case 37:
        goPrevious()
        break
      case 39:
        goNext()
        break
      case 27:
        closeModal()
        break
      default:
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyboardNavigation)
    return () => {
      window.removeEventListener("keydown", keyboardNavigation)
    }
  })

  return (
    <div className="flex relative h-screen">
      <div className="flex flex-wrap items-end md:items-center justify-center mx-auto w-full max-w-screen-xl">
        <div className="order-3 md:order-first pb-2 w-8 mx-2 md:mx-4">
          {previous && (
            <Link
              asModal
              className="inline-block w-10 h-10 px-2 text-white hover:text-blue-400"
              state={{ navigation: { current: current - 1, items } }}
              to={previous}
            >
              <FaAngleLeft className="w-full h-full fill-current transition-colors duration-200" />
            </Link>
          )}
        </div>
        <div className="w-full mt-12 md:mt-0 mx-3 md:mx-0 md:flex-1 bg-white shadow-lg rounded-md overflow-hidden">
          {children}
        </div>
        <div className="order-last pb-2 w-8 mx-2 md:mx-4">
          {next && (
            <Link
              asModal
              className="inline-block w-10 h-10 px-2 text-white hover:text-blue-400"
              state={{ navigation: { current: current + 1, items } }}
              to={next}
            >
              <FaAngleRight className="w-full h-full fill-current transition-colors duration-200" />
            </Link>
          )}
        </div>
      </div>
      <button
        className="absolute top-0 right-0 m-3 lg:m-6 focus:outline-none"
        onClick={closeModal}
      >
        <FaTimes className="w-8 h-8 fill-current text-white hover:text-blue-400 transition-colors duration-200" />
      </button>
    </div>
  )
}
