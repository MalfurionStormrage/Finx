import md5 from 'md5';
import axios from 'axios';
import { SET_TOKEN } from '../../redux/actions/auth';
import Swal from 'sweetalert2/dist/sweetalert2.js';

class Login {
    constructor(email, password) {
        this.email = email;
        this.password = md5(password);
    }

    async auth(datos) {
        try {
            const respuesta = await axios.post('https://finxx.herokuapp.com/signin', datos);
            return respuesta;
        } catch (error) {
            return error;
        }
    }
}

export const handleLogin = async (e, email, password, setPassword, dispatch, history, setLoading, setMsjAlert, setmensaje) => {
    try {
        e.preventDefault(); setLoading(true);

        if (email === "" || password === "") return Swal.fire({
            title: 'Error en el inicio de sesion',
            icon: 'error',
            texto: 'Alguno de los campones se encuentran vacios.'
        });

        const login = new Login(email.toUpperCase().trim(), md5(password));
        const { data } = await login.auth(login);

        if (data.message === "Dirección de correo electrónico no válida." || data.message === "La contraseña que ingresaste es incorrecta.") {

            setMsjAlert(true); setmensaje(data.message); setLoading(false); setPassword("");
            return setTimeout(() => { setMsjAlert(false); }, 3500);
        }

        dispatch(SET_TOKEN(data.token));
        history.push('/home');
        setLoading(false);

    } catch (error) {

        return Swal.fire({
            title: 'Error en la solicitud',
            icon: 'error',
            text: `Hubo un error en la solicitud, Causa: ${error}`
        });
    }

}