import React from 'react'
import Child from './Child';

export default function Parent({ring}) {
  return (
    <div className='p-3 border w-75 border-info m-3'>
        Parent 🤨
        <Child ring={ring}/>
        </div>
  )
}
