import React, { useState, useEffect } from 'react';
import Card from './Card/Card'

const CardsSection = () => {
    const [applicants, setApplicants] = useState([]);
    const url = "http://localhost:3080/api/applicants"
    const fetchApi = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setApplicants(data.data.applicants);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    useEffect(()=>{
        fetchApi()
    },[])
    return (
        <div id='aspirantes'>
            <h2>Aspirantes</h2>
            <div className="flex flex-wrap justify-center">
                {applicants.map((applicant, index) => (<Card key={index} number={index} />))}
            </div>
        </div>
    );
}

export default CardsSection
