import React, { useState, useEffect } from 'react'
import img from '../../assets/img1.svg';
import { handleRegistro } from './registro';
import Spinner from '../../components/Spinner';
import LinkPreload from '../../components/LinkPreload';
import ButtonCustom from '../../components/ButtonCustom';
import LabelAndInputF from '../../components/LabelAndInputF';
import { validateEmail, validatePasswordComplex, validatePhone, validateUsername, handleVerificarPassword } from '../../utils/validate';

export default function registroView({ history }) {

    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [loadin, setLoading] = useState(false);
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassowrd] = useState("");
    const [confirPassword, setConfirpassword] = useState("");

    useEffect(() => {
        return () => null
    }, [])

    return (
        <>
            {
                loadin ? <Spinner /> :
                    <section className="backgroundimagns flex justify-items-center items-center min-h-screen" id="registroView">
                        <form className="p-3 w-auto sm:rounded-md sm:shadow-2xl sm:container sm:mx-auto md:lg:w-1/2 lg:w-5/12  bg-white my-1"
                            onSubmit={e => handleRegistro(e, nombre, apellido, telefono, email, password, history, setTelefono, setEmail, setLoading)}>
                            <div className="d-flex justify-items-center">
                                <img src={img} className="h-36 w-full" alt="Logo" loading="lazy" width="100%" height="100%" />
                            </div>
                            <div className="text-center my-1">
                                <h1 className="font-extrabold text-2xl">Registro de usuario</h1>
                            </div>
                            <div className="my-1 grid grid-cols-1 sm:grid-cols-2">
                                <div className="sm:mr-1">
                                    <LabelAndInputF
                                        type="text"
                                        tag="Nombre"
                                        texto="Nombre"
                                        placeholder="Digite su nombre"
                                        mensajeAlerta="Proporciona un nombre válido."
                                        state={nombre}
                                        setState={setNombre}
                                        fValidate={validateUsername} />
                                </div>
                                <div className="sm:ml-1">
                                    <LabelAndInputF
                                        type="text"
                                        tag="Apellido"
                                        texto="Apellido"
                                        placeholder="Digite su(s) apellido(s)"
                                        mensajeAlerta="Proporciona un apellido válido."
                                        state={apellido}
                                        setState={setApellido}
                                        fValidate={validateUsername} />
                                </div>
                            </div>
                            <div className="my-1">
                                <LabelAndInputF
                                    type="number"
                                    tag="telefono"
                                    texto="telefono"
                                    placeholder="Número de teléfono"
                                    mensajeAlerta="Proporciona un número de teléfono válido (10 núm)."
                                    state={telefono}
                                    setState={setTelefono}
                                    fValidate={validatePhone} />
                            </div>
                            <div className="my-1">
                                <LabelAndInputF
                                    type="email"
                                    tag="email"
                                    texto="Correo Electrónico"
                                    placeholder="Email@example.com"
                                    mensajeAlerta="Proporciona un Correo electrónico válido."
                                    state={email}
                                    setState={setEmail}
                                    fValidate={validateEmail} />
                            </div>
                            <div className="my-1 grid grid-cols-1 sm:grid-cols-2">
                                <div className="sm:pr-1">
                                    <LabelAndInputF
                                        type="password"
                                        tag="password"
                                        texto="Contraseña"
                                        placeholder="Digite su contraseña"
                                        mensajeAlerta="esforzate un poco, asi te jakian facil los de anonimus."
                                        state={password}
                                        setState={setPassowrd}
                                        fValidate={validatePasswordComplex} />
                                </div>
                                <div className="sm:pl-1">
                                    <LabelAndInputF
                                        type="password"
                                        tag="confirPassword"
                                        texto="Confirmar contraseña"
                                        placeholder="Confirme su contraseña"
                                        mensajeAlerta="Las contraseñas no coinciden."
                                        state={confirPassword}
                                        setState={setConfirpassword}
                                        fValidate={handleVerificarPassword}
                                        password={password} />
                                </div>
                            </div>
                            <div className="my-2">
                                <ButtonCustom type="submit"
                                    props2={!validateUsername(nombre) || !validateUsername(apellido) || !validatePhone(telefono) || !validateEmail(email) || !validatePasswordComplex(password) || !handleVerificarPassword(confirPassword, password) || confirPassword != password ? "disabled" : ""} texto="Registrarse" />
                            </div>
                            <div className="my-2 text-center font-semibold">
                                <p>¿Ya tienes cuenta? <LinkPreload to="/" clases="text-yellow-800" texto="Inicia sesión" /></p>
                            </div>
                        </form>
                    </section>
            }
        </>
    )
}