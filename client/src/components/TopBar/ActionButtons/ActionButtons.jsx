import React from 'react'
import Button from './Button'

const ActionButtons = () => {
    const buttons = [
        {
            icon: "fa-solid fa-user-plus",
            path: "#"
        },
        {
            icon: "fa-solid fa-user",
            path:"#"
        },
        {
            icon:"fa-solid fa-right-from-bracket",
            path:"#"
        }
    ]

    return (
        <div className='flex shadow-md rounded-lg shadow-slate-200 self-center mt-4 md:m-0'>
            {
                buttons.map((button, i) => <Button key={button.icon.trim() + i} icon={button.icon}/> )
            }
        </div>
    )
}

export default ActionButtons
