import React from 'react'
import ListItem from './ListItem/ListItem'

const ListSection = (props) => {

    {/** Profesiones Placeholder */}
    const profesiones = ["Abogado", "Arquitecto", "Botánico", "Computista", "Economista", "Técnico de Sonido", "Profesor", "Linguista"]

    return (
        <div id='profesiones'>
            <h2>Profesiones</h2>

            <div className="w-full md:w-3/4 mx-auto shadow-md shadow-slate-200 p-4 rounded-lg">

                <ul className="text-sm font-medium bg-white border rounded-lg border-gray-200">
                    <li className="w-full px-4 py-2 border border-slate-200 rounded-t-lg bg-blue-600 text-white text-2xl">Lista de Profesiones</li>

                    {
                        profesiones.map((profesion, i) => <ListItem key={"i" + profesion} profesion={profesion}/> )
                    }
                </ul>

            </div>

        </div>
    )
}

export default ListSection
