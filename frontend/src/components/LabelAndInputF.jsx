import React from 'react';
import IconShow from './icons/IconShow';
import IconError from './icons/IconError';
import IconHidden from './icons/IconHidden';
import IconSuccess from './icons/IconSuccess';

export default function LabelAndInputF({ type, tag, texto, placeholder, mensajeAlerta, state, setState, fValidate, password, props2 }) {
    const [Mostrar, setMostrar] = React.useState(false);
    const [mostrar, setMostrarP] = React.useState(false);

    return (
        <>
            <label className="my-1 font-bold" htmlFor={tag}> {texto}</label>
            <div className="relative flex w-full items-stretch">
                <input
                    value={state}
                    autoComplete="off"
                    name={tag} id={tag}
                    placeholder={placeholder}
                    type={!mostrar ? type : "text"}
                    onFocus={() => setMostrar(true)}
                    onBlur={() => setMostrar(false)}
                    disabled={props2 ? "disabled" : null}
                    onChange={e => setState(e.target.value)}
                    className="w-full p-2 rounded shadow ring-1 ring-yellow-700 focus:ring-yellow-800 outline-none focus:outline-none focus:ring-2 overflow-visibletransition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50"
                />
                {
                    type === "password" ? <button type="button" name="btnShowPassword" aria-label="Mostrar contraseña" id={`btn${tag}`}
                        onClick={() => setMostrarP(!mostrar)}
                        className="ml-1 rounded-full bg-white hover:bg-yellow-800 outline-none focus:outline-none 
                    focus:ring-0 focus:border-0 shadow z-50 hover:text-white">
                        <span>
                            {
                                !mostrar ? <IconShow tag={tag} /> : <IconHidden tag={tag} />
                            }
                        </span>
                    </button> : null
                }
                <span className={`z-10 leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 py-2 ${type === "password" ? 'p-14' : 'pr-2'}`}>
                    {
                        state.length >= 1 ? tag === "confirPassword" ?
                            !fValidate(state, password) && state.length >= 1 ? <IconError /> : <IconSuccess /> :
                            !fValidate(state) && state.length >= 1 ? <IconError /> : <IconSuccess /> : null
                    }
                </span>
            </div>
            {
                tag === "confirPassword" ?
                    !fValidate(state, password) && Mostrar && state.length >= 1 ? <div className="bg-red-700 p-1 rounded text-white border-2 border-red-900 transition duration-300 my-1"> {mensajeAlerta} </div> : null
                    : !fValidate(state) && Mostrar && state.length >= 1 ? <div className="bg-red-700 p-1 rounded text-white border-2 border-red-900 transition duration-300 my-1"> {mensajeAlerta} </div> : null
            }
        </>
    )
}