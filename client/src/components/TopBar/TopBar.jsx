import React from 'react'
import Button from './ActionButtons/Button'
import SearchBar from './SearchBar/SearchBar'
import ActionButtons from './ActionButtons/ActionButtons'

const TopBar = () => {
  return (
    <div className='w-full flex justify-between p-4 bg-white border border-slate-200 sticky top-0'>
      <SearchBar/>
      <ActionButtons/>
    </div>
  )
}

export default TopBar
