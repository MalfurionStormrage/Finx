import React from 'react'

export default function ButtonCustom({ texto, prop, props2, type, onClick }) {
    return (
        <button disabled={props2} type={type} name={prop}
            className="w-full disabled:opacity-50 disabled:transform-none 
        disabled:bg-yellow-700 disabled:cursor-not-allowed p-2 
        bg-yellow-700 border-0 outline-none active:outline-none 
        border-yellow-700 text-white 
        rounded shadow hover:bg-yellow-800 
        transition duration-300 transform hover:-translate-y-1"
            onClick={onClick}
        >
            {texto}
        </button>
    )
}
