import React from 'react'
import img from '../assets/not_found.svg';
import LinkPreload from '../components/LinkPreload';

export default function page404() {
    return (
        <section className="w-full min-h-screen backgroundimagns items-center flex justify-center">
            <div className="p-10 shadow-2xl bg-white font-bold">
                <img src={img} className="w-full h-80" />
                <div className="text-center my-5">
                    <p className="text-lg">
                        La página a la que intentas acceder no existe o no posees los permisos necesarios.
                    </p>
                    <button className="bg-white p-2 rounded shadow ring-2 ring-yellow-700 hover:bg-yellow-700 hover:text-white mt-4"> <LinkPreload to="/" texto="Ir al inicio" /> </button>
                </div>
            </div>
        </section>
    )
}
