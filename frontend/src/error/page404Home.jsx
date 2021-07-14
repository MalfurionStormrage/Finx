import React from 'react'
import img from '../assets/Faq.svg';
import LinkPreload from '../components/LinkPreload';

export default function page404Home() {
    return (
        <section className="w-ful h-full items-center flex justify-center">
            <div className="p-10 shadow-2xl bg-white font-bold">
                <img src={img} className="w-full h-80" />
                <div className="text-center my-3">
                    <p className="text-lg">
                        El apartado al que intentas acceder no existe o no posees los permisos necesarios.
                    </p>
                    <button className="bg-white p-2 rounded shadow ring-2 ring-yellow-700 hover:bg-yellow-700 hover:text-white mt-4"> <LinkPreload to="/home" texto="Ir al inicio" /> </button>
                </div>
            </div>
        </section>
    )
}
