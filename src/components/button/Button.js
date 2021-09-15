import React from 'react'
import './button.css'
export default function Button({text}) {
    console.log(text)
    return <button className='button'>{text}</button>
    
}
