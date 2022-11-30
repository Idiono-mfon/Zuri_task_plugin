import React from "react"
import ReactDOM from "react-dom"
import singleSpaReact from "single-spa-react"
import rootComponent from "./root.component"

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  renderType: "render",
  rootComponent,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    console.error({ err, info, props })
    return null
  }
})

export const { bootstrap, mount, unmount } = lifecycles
