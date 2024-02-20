import React from 'react'
import TitleSection from './TitleSection/TitleSection'
import CardsSection from './CardsSection/CardsSection'
import ListSection from './ListSection/ListSection'

const MainPage = () => {
  return (
    <div className='p-4 pt-16 lg:px-8 lg:pt-8 bg-gray-50'>
      <TitleSection/>
      <CardsSection/>
      <ListSection/>
    </div>
  )
}

export default MainPage
