import React from 'react';
import IconError from './icons/IconError';
import IconSuccess from './icons/IconSuccess';

export default function LabelAndTextareaF({ type, tag, texto, placeholder, mensajeAlerta, state, setState, fValidate }) {
    const [Mostrar, setMostrar] = React.useState(false);
    return (
        <>
            <label className="my-2 font-bold" htmlFor={tag}> {texto}</label><br />
            <textarea
                type={type}
                rows="4"
                id={tag}
                name={tag}
                value={state}
                autoComplete="off"
                placeholder={placeholder}
                onFocus={() => setMostrar(true)}
                onBlur={() => setMostrar(false)}
                onChange={e => setState(e.target.value)}
                className="w-full p-2 rounded shadow ring-1 ring-yellow-700 focus:ring-yellow-800 outline-none focus:outline-none focus:ring-2 overflow-visibletransition-all duration-150"
            />
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-11 py-2">
                {
                    state.length >= 1 ? !fValidate(state) ? <IconError /> : <IconSuccess /> : null
                }
            </span>
            {
                !fValidate(state) && Mostrar && state.length >= 1 ? <div className="bg-red-600 text-white p-2  my-1 rounded shadow transition-all duration-150"> {mensajeAlerta} </div> : null
            }
        </>
    )
}