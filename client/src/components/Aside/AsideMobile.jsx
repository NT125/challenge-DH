import React, { useState } from 'react'
import TopBar from '../TopBar/TopBar';

const AsideMobile = () => {
    const [isOpen, setIsOpen] = useState();

    return (
        <div className='fixed w-full top-0'>
            <div className="w-full flex flex-col justify-center p-4 bg-white border-b border-slate-200">
                <button className='text-blue-500' onClick={() => setIsOpen(!isOpen)}>
                    <i className={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-right"}`}></i><span className="font-lg font-bold pl-2">OPCIONES</span>
                </button>

                {isOpen && (
                    <div className='flex flex-col md:flex-row'>
                        <ul className='py-3 text-slate-400 font-bold basis-1/2'>
                            <li className='pt-2 pb-3'><a href="#" className='transition-all ease-out focus:text-slate-600'><i className="fa-regular fa-building pr-1"></i> Empresas</a></li>
                            <li className='pb-3'><a href="#" className='transition-all ease-out focus:text-slate-600'><i className="fa-regular fa-user pr-1"></i>Aspirantes</a></li>
                            <li className='pb-3'><a href="#" className='transition-all ease-out focus:text-slate-600'><i className="fa-solid fa-list-ul pr-1"></i>Profesiones</a></li>
                            <li className='pb-3'><a href="#" className='transition-all ease-out focus:text-slate-600'><i className="fa-regular fa-id-card pr-1"></i>Postulate aquí</a></li>
                            <li className='pb-3'><a href="#" className='transition-all ease-out focus:text-slate-600'><i className="fa-regular fa-comment-dots pr-1"></i>Contacto</a></li>
                        </ul>

                        <div className="flex-col basis-1/2">

                            <div className="md:none">
                                <TopBar />
                            </div>

                            <div className="font-bold flex justify-center">
                                <img src="/assets/img/logo-dh.png" alt="Logo de Digital House" className='w-16 p-0 cursor-default pointer-events-none' />
                                <span className="my-auto text-black">Digital House</span>
                            </div>

                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default AsideMobile
