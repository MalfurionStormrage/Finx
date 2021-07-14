import React, { useState, useEffect } from "react";
import LabelAndInputF from '../LabelAndInputF';
import LabelAndTextareaF from '../LabelAndTextareaF';
import { validateProducto, validateTextarea, validateNumber } from '../../utils/validate';
import { postProducto } from "../../views/dashboard/sections/producto/producto";

export default function Modal({ token, cargarDatos }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [descripcion, setDescripcion] = useState("");
  const handleAgregar = async () => {
    setShowModal(false);
    await postProducto(nombre, descripcion, precio, token);
    await cargarDatos();
  }

  useEffect(() => {
    setNombre(""); setDescripcion(""); setPrecio("");
    return () => null;
  }, [showModal])

  return (
    <>
      <button
        className="bg-green-700 w-full sticky top-0 flex justify-center text-white active:bg-green-700 hover:bg-green-800 font-black uppercase text-lg px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none my-1 ease-linear transition-all duration-150 z-30"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden sm:block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg> Agregar nuevo producto
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Agregar nuevo producto</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <form>
                    <div className="my-1">
                      <LabelAndInputF
                        type="text"
                        tag="nombre"
                        texto="Nombre"
                        placeholder="Nombre del nuevo producto"
                        mensajeAlerta="proprociona un nombre valido."
                        state={nombre}
                        setState={setNombre}
                        fValidate={validateProducto}
                      />
                    </div>
                    <div className="my-1">
                      <LabelAndTextareaF
                        type="text"
                        tag="Descripcion"
                        texto="Descripcion"
                        placeholder="Descripcion del nuevo producto"
                        mensajeAlerta="Proporciona una descripcion valida."
                        state={descripcion}
                        setState={setDescripcion}
                        fValidate={validateTextarea}
                      />
                    </div>
                    <div className="my-1">
                      <LabelAndInputF
                        type="number"
                        tag="precio"
                        texto="Precio"
                        placeholder="Precio del nuevo producto"
                        mensajeAlerta="wtf , porque tan caro ? :u , bajale pri ;)"
                        state={precio}
                        setState={setPrecio}
                        fValidate={validateNumber}
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-red-600 text-white flex active:bg-red-600 hover:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Cancelar
                  </button>
                  <button
                    disabled={!validateProducto(nombre) || !validateTextarea(descripcion) || !validateNumber(precio) ? 'disabled' : ''}
                    className="bg-green-600 text-white active:bg-green-600 hover:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-green-600 flex"
                    type="button"
                    onClick={() => handleAgregar()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}