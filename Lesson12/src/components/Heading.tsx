import React from 'react'

//Types
type HeadingProp = {title :string}


const Heading = ({title} :HeadingProp) => {
  return (
    <h1>{title}</h1>
  )
}

export default Heading