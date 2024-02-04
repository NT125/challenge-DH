import React from 'react'
import Button from './ActionButtons/Button'
import SearchBar from './SearchBar/SearchBar'
import ActionButtons from './ActionButtons/ActionButtons'

const TopBar = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between p-4 bg-white lg:border border-slate-200'>
      <SearchBar />
      <ActionButtons />
    </div>
  )
}

export default TopBar
