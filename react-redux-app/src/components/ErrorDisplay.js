import React from 'react'
import '../App.css'

function ErrorDisplay(props) {
  return(
    <h1 id="error-text">Error: {props.error}</h1>
  )
}

export default ErrorDisplay