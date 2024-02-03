import React from 'react'

const ListItem = (props) => {

    return (
        <li>
            <button className="transition-all ease-out w-full px-4 py-2 border-b border-gray-200 hover:bg-slate-100 active:bg-slate-200">{props.profesion}</button>
        </li>
    )
}

export default ListItem
