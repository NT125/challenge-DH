import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <form action='#' method='GET' className='flex self-center'>
        <i className="fa-solid fa-magnifying-glass my-auto px-2 text-blue-600"></i>
        <input type="text" name="search" id="search" placeholder='Buscar...' className='p-2 transition-all ease-in-out rounded-lg border border-slate-200 hover:border-blue-300 shadow-slate-100 focus:bg-slate-100'/>
    </form>
  )
}

export default SearchBar
