import React from "react"

import useApplicationData from "./hooks/useApplicationData"

const Application = () => {
  const { state, dispatch } = useApplicationData()

  return (
    <div>Hello World</div>
  )
}

export default Application
