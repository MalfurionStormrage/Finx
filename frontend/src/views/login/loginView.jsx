import React, { useEffect, useState } from 'react'
import { handleLogin } from './login';
import Img from '../../assets/img1.svg';
import Spinner from '../../components/Spinner';
import { useDispatch, useSelector } from "react-redux";
import LinkPreload from '../../components/LinkPreload';
import ButtonCustom from '../../components/ButtonCustom';
import LabelAndInputF from '../../components/LabelAndInputF';
import { validateEmail, handleValidlength } from '../../utils/validate';

export default function loginView({ history }) {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [loadin, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [mensaje, setmensaje] = useState(false);
    const [MsjAlert, setMsjAlert] = useState(false);
    const { token } = useSelector(state => state.persistedReducer.auth);

    useEffect(() => {
        if (token) history.push('/home');
        return () => null;
    }, []);


    return (
        <>
            {loadin ? <Spinner /> :
                <section className="backgroundimagns flex justify-items-center items-center min-h-screen" id="loginView">
                    <form className="p-5 w-auto sm:w-96 sm:container sm:mx-auto bg-white sm:rounded-md sm:shadow-2xl"
                        onSubmit={e => handleLogin(e, email, password, setPassword, dispatch, history, setLoading, setMsjAlert, setmensaje)}>
                        <div className="d-flex justify-items-center">
                            <img src={Img} className="h-44 w-full" alt="Logo" loading="lazy" width="100%" height="100%" />
                        </div>
                        <div className="text-center my-3">
                            <h1 className="font-extrabold text-3xl">Inicio de sesión</h1>
                        </div>
                        <div className="my-2">
                            <LabelAndInputF
                                type="email"
                                tag="email"
                                texto="Correo electrónico"
                                placeholder="Email@example.com"
                                mensajeAlerta="Proporciona un correo electrónico válido."
                                state={email}
                                setState={setEmail}
                                fValidate={validateEmail} />
                        </div>
                        <div className="my-2">
                            <LabelAndInputF
                                type="password"
                                tag="password"
                                texto="Contraseña"
                                placeholder="Contraseña de usuario"
                                mensajeAlerta="La contraseña debe tener mínimo 6 dígitos."
                                state={password}
                                setState={setPassword}
                                fValidate={handleValidlength} />
                        </div>
                        {
                            MsjAlert ? <div className="bg-red-700 text-white rounded shadow-lg p-2 border-2 border-red-800 my-2" id="alertLoginView"> {mensaje} </div> : null
                        }
                        <div>
                            <ButtonCustom prop="btnIniciarSesion" props2={email === "" || password === "" || !handleValidlength(password) || !validateEmail(email) ? "disabled" : ""} type="submit" texto="Iniciar sesion" />
                        </div>
                        <div className="my-2 text-center font-semibold">
                            <p>¿No tienes cuenta? <LinkPreload to="/signup" clases="text-yellow-800" texto="Registrate" /></p>
                        </div>
                    </form>
                </section>}
        </>
    )
}
