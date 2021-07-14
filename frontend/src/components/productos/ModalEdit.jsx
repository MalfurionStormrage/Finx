import React, { useEffect, useState, memo } from "react";
import LabelAndInputF from '../LabelAndInputF';
import LabelAndTextareaF from '../LabelAndTextareaF';
import { validateNumber, validateProducto, validateTextarea } from "../../utils/validate";
import { putProducto } from "../../views/dashboard/sections/producto/producto";

export default memo(function ModalEdit({ _id, nombre, descripcion, precio, token, cargarDatos }) {

    const [idEdit, setIdEdit] = useState("");
    const [nombreEdi, setNombreEdit] = useState("");
    const [precioEdit, setPrecioEdit] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [descripcionEdit, setDescripcionEdit] = useState("");

    useEffect(() => {
        setIdEdit(_id);
        setNombreEdit(nombre);
        setPrecioEdit(precio);
        setDescripcionEdit(descripcion);

        return () => null;
    }, [showModal]);

    const handleEditarProducto = async (id, nombre, descripcion, precio, token) => {
        setShowModal(false);
        await putProducto(id, nombre, descripcion, precio, token);
        cargarDatos();
    }

    return (
        <>
            <button
                className="p-2 bg-yellow-600 border-2 border-yellow-700 text-white rounded-full sm:rounded"
                type="button"
                onClick={() => setShowModal(true)}
                aria-label="Editar producto"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">Editar datos de producto</h3>
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
                                <div className="relative p-3 flex-auto text-left">
                                    <form>
                                        <div className="my-1 p-1">
                                            <LabelAndInputF
                                                type="text"
                                                tag="id"
                                                texto="ID de producto"
                                                placeholder="Identificacion del producto"
                                                mensajeAlerta="proprociona un identificacion valido."
                                                state={idEdit}
                                                setState={setIdEdit}
                                                fValidate={validateProducto}
                                                props2={true}
                                            />
                                        </div>
                                        <div className="my-1">
                                            <LabelAndInputF
                                                type="text"
                                                tag="nombre"
                                                texto="Nombre"
                                                placeholder="Nombre producto"
                                                mensajeAlerta="proprociona un nombre valido."
                                                state={nombreEdi}
                                                setState={setNombreEdit}
                                                fValidate={validateProducto}
                                            />
                                        </div>
                                        <div className="my-1">
                                            <LabelAndTextareaF
                                                type="text"
                                                tag="Descripcion"
                                                texto="Descripcion"
                                                placeholder="Descripcion del producto"
                                                mensajeAlerta="Proporciona una descripcion valida."
                                                state={descripcionEdit}
                                                setState={setDescripcionEdit}
                                                fValidate={validateTextarea}
                                            />
                                        </div>
                                        <div className="my-1">
                                            <LabelAndInputF
                                                type="number"
                                                tag="precio"
                                                texto="Precio"
                                                placeholder="Precio producto"
                                                mensajeAlerta="proprociona un Precio valido."
                                                state={precioEdit}
                                                setState={setPrecioEdit}
                                                fValidate={validateNumber}
                                            />
                                        </div>
                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="bg-red-600 text-white flex active:bg-red-600 hover:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button" onClick={() => setShowModal(false)}                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Cancelar
                                    </button>
                                    <button
                                        disabled={!validateProducto(nombreEdi) || !validateProducto(idEdit) || !validateTextarea(descripcionEdit) || !validateNumber(precioEdit) ? 'disabled' : ''}
                                        className="bg-yellow-600 text-white active:bg-yellow-600 hover:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-yellow-600 flex"
                                        type="button"
                                        onClick={() => handleEditarProducto(idEdit, nombreEdi, descripcionEdit, precioEdit, token)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                        </svg>
                                        Editar
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
})
