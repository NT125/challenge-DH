import React, { useState, useEffect } from 'react';
import ListItem from './ListItem/ListItem'

const ListSection = (props) => {

    const [profession, setProfession] = useState([]);
    const url = "http://localhost:3080/api/professions"
    const fetchApi = async() =>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            setProfession(data.data.professions);
        }catch(error){
            console.error("Error:",error)
        }
        
    }
    useEffect(()=>{
    fetchApi()
    },[])
    return (
        <div id='profesiones'>
            <h2>Profesiones</h2>

            <div className="w-full md:w-3/4 mx-auto shadow-md shadow-slate-200 p-4 rounded-lg">

                <ul className="text-sm font-medium bg-white border rounded-lg border-gray-200">
                    <li className="w-full px-4 py-2 border border-slate-200 rounded-t-lg bg-blue-600 text-white text-2xl">Lista de Profesiones</li>

                    {
                       profession.map((profession) => (<ListItem key={profession.id} profession={profession} />))
                    }
                </ul>

            </div>

        </div>
    )
}

export default ListSection
