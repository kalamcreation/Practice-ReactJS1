import React from 'react'
import Parent from './Parent';

export default function GrandParent() {
    const ring = '💍';
  return (
    <div className='p-3 border w-25 border-danger m-3'>
        Grand Parent 😊
    <Parent ring={ring}/>
    </div>
  )
}
