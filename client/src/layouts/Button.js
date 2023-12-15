import React from 'react'

function Button(props) {
  return (
    <div>
        <button className='bg-secondary text-white font-bold rounded-sm hover:bg-textsub px-5 py-3'>{props.title}</button>
    </div>
  )
}

export default Button