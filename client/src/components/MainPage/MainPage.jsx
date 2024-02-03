import React from 'react'
import TitleSection from './TitleSection/TitleSection'
import CardsSection from './CardsSection/CardsSection'
import ListSection from './ListSection/ListSection'

const MainPage = () => {
  return (
    <div className='p-4'>
      <TitleSection/>
      <CardsSection/>
      <ListSection/>
    </div>
  )
}

export default MainPage
