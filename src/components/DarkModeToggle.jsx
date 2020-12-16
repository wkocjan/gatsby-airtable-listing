import React from "react"
import PropTypes from "prop-types"
import { Switch } from "@headlessui/react"

export const DarkModeToggle = (props) => {
  const { checked, onChange } = props

  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className="relative inline-flex items-center flex-shrink-0 bg-black w-11 h-6 rounded-full cursor-pointer focus:outline-none focus:shadow-outline transition-colors duration-200 ease-in-out"
    >
      <span className="sr-only">Enable Dark Mode</span>
      <span
        className={`${
          checked ? "translate-x-1" : "translate-x-6"
        } inline-block w-4 h-4 transition duration-200 ease-in-out transform bg-white rounded-full`}
      />
    </Switch>
  )
}

DarkModeToggle.propTypes = {
  enabled: PropTypes.bool,
  onChange: PropTypes.func,
}
