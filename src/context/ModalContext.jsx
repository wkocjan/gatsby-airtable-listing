import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import React from "react"

export function useModal() {
  const context = React.useContext(ModalRoutingContext)
  if (context === undefined) {
    throw new Error(
      `useModal must be used within an ModalRoutingContext.Provider`
    )
  }
  return context
}
