import React from 'react'

export default function WorkSample({year, experience, institute}) {
  return (
    <div>
        <span>{year}</span>
        <h2>{experience}</h2>
        <p>{institute}</p>
    </div>
  )
}
