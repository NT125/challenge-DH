import React from 'react'

const Button = (props) => {
    const {
        icon = "fa-solid fa-question",
        path = "#"
    } = props

    return (
        <button href='#' className='transition-all ease-in-out rounded-md px-3 py-2 m-1 hover:bg-slate-100'>
            <span className='text-blue-600'> <i className={icon}></i> </span>
        </button>
    )
}

export default Button
