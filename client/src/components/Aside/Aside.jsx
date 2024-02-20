import React from 'react'

const Aside = () => {
    return (
        <div className='flex flex-col h-full bg-white border-r border-slate-200 py-8 px-16 text-start'>

            <div className="fixed">

                <div className="flex-row mb-8">
                    <div className="font-bold flex">
                        <img src="/assets/img/logo-dh.png" alt="Logo de Digital House" className='w-16 p-0 cursor-default pointer-events-none' />
                        <span className="my-auto text-black">Digital House</span>
                    </div>
                </div>

                <span className="font-lg font-bold text-blue-500">OPCIONES</span>

                <ul className='py-3 text-slate-400 font-bold'>
                    <li className='pt-2 pb-3'><a href="#empresas" className='transition-all ease-out focus:text-slate-600'><i className="fa-regular fa-building pr-1"></i> Empresas</a></li>
                    <li className='pb-3'><a href="#aspirantes" className='transition-all ease-out focus:text-slate-600'><i className="fa-regular fa-user pr-1"></i>Aspirantes</a></li>
                    <li className='pb-3'><a href="#profesiones" className='transition-all ease-out focus:text-slate-600'><i className="fa-solid fa-list-ul pr-1"></i>Profesiones</a></li>
                    <li className='pb-3'><a href="#" className='transition-all ease-out focus:text-slate-600'><i className="fa-regular fa-id-card pr-1"></i>Postulate aquí</a></li>
                    <li className='pb-3'><a href="#" className='transition-all ease-out focus:text-slate-600'><i className="fa-regular fa-comment-dots pr-1"></i>Contacto</a></li>
                </ul>

            </div>

        </div>
    )
}

export default Aside
