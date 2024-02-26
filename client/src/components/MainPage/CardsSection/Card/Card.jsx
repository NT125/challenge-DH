import React, { useState, useEffect } from 'react';

const Card = ({number}) => {    
    const [applicant, setApplicant] = useState();
    const url = "http://localhost:3080/api/applicants"
    const fetchApi = async() =>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            setApplicant(data.data.applicants[number]);
        }catch(error){
            console.error("Error:",error)
        }
        
    }
    useEffect(()=>{
    fetchApi()
    },[])
    return (
        <div className='rounded-lg bg-white shadow-md shadow-slate-300 md:m-4 md:p-4 p-2 m-2 basis1/3 md:basis-1/4'>
            {applicant && (
                <>
                    <div className="flex flex-col pb-4">
                        <img src={`./assets/img/${applicant.image}`} alt={`Foto de ${applicant.firstName}`} className='w-1/2 md:w-full mx-auto rounded-full'/>
                        <span className='font-bold'>{applicant.firstName}</span>
                        <span className='subtitle text-sm'>{applicant.profession[0].name}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between mt-4 text-slate-600">
                        <button className='hover:text-amber-400 transition-all ease-out'>
                            <i className="fa-regular fa-star"></i>
                        </button>
                        <button className='hover:text-slate-400 transition-all ease-out'>
                            <i className="fa-regular fa-comment"></i>
                        </button>
                        <button className='hover:text-blue-500 transition-all ease-out'>
                            <i className="fa-regular fa-envelope"></i>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Card
