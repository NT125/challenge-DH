import React from 'react'

const Card = (props) => {
    const {
        nombre = "Lionel Andrés Messi",
        puesto = "placeholder",
        foto = "mesi.jpg"
    } = props;

    return (
        <div className='rounded-lg bg-white shadow-md shadow-slate-300 m-4 p-4 basis-1/4'>

            <div className="flex flex-col pb-4">

                <img src={`/assets/${foto}`} alt={`Foto de ${nombre}`} className='w-1/2 mx-auto rounded-full'/>

                <span className='font-bold'>{nombre}</span>
                <span className='subtitle text-sm'>{puesto}</span>
                
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

        </div>
    )
}

export default Card
