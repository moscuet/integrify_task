import React from 'react'
import './button.css'
//bg is buttonn background ConvolverNode. option: bg = primary / secondary
export default function Button({text,bg}) {
    return <button className={`button button-${bg}`}>{text}</button>  
}
