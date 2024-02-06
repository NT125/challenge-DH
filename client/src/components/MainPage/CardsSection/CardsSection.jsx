import React from 'react'
import Card from './Card/Card'

const CardsSection = () => {
    return (
        <div id='aspirantes'>
            <h2>Aspirantes</h2>

            <div className="flex flex-wrap justify-center">

                <Card/>
                <Card/>
                <Card/>

                <Card/>
                <Card/>
                <Card/>

            </div>

        </div>
    )
}

export default CardsSection
