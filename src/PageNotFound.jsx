import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to='/'>Go back to home</Link>
    </>
  )
}

export default PageNotFound
