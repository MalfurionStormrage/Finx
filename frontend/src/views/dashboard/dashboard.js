import axios from 'axios';
import Swel from 'sweetalert2';
import { DELETE_TOKEN } from '../../redux/actions/auth';

export const verificarToken = async (token, dispatch) => {
    try {
        const respuesta = await axios.get('https://finxx.herokuapp.com/islogin', {
            headers: {
                'x-access-token': token
            }
        });

        if (respuesta.data.Vtoken === "") {
            dispatch(DELETE_TOKEN());
            return Swel.fire({
                title: 'Estado de la sesión',
                icon: 'info',
                text: 'La sesión expiro',
                allowOutsideClick: false
            });
        }

    } catch (error) {

        Swel.fire({
            tittle: 'Hubo un error',
            icon: 'error',
            text: `La causa de este error es: ${error}`
        })
    }
}