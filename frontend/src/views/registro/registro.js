import md5 from 'md5';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';

class Registro {
    constructor(nombre, apellido, telefono, email, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.password = md5(password);
    }

    async save(datos) {
        try {

            const resultado = await axios.post('https://finxx.herokuapp.com/signup', datos);
            return resultado;

        } catch (error) {
            return error;
        }
    }
}

export const handleRegistro = async (e, nombre, apellido, telefono, email, password, history, setTelefono, setEmail, setLoading) => {
    try {
        e.preventDefault(); setLoading(true);

        if (nombre === "" || apellido === "" || telefono === "" || email === "" || password === "") return Swal.fire({
            title: 'Error en la solicitud',
            icon: 'error',
            text: 'Alguno de los campos se encuentra vacíos.'
        });

        const registro = new Registro(nombre, apellido, telefono, email.toUpperCase().trim(), md5(password));
        const { data } = await registro.save(registro);

        if (data.message === "Unique field already exists") {
            setLoading(false); setTelefono(""); setEmail("");
            return Swal.fire({
                title: 'Estado de la solicitud',
                icon: 'info',
                text: 'Número de teléfono o correo electrónico ya registrado.'
            })
        }

        if (data.message === "Usuario registrado") {
            await Swal.fire({
                title: 'Estado de la solicitud',
                icon: 'success',
                text: 'Se registró correctamente.'
            })

            history.push('/');
        }

    } catch (error) {

        return Swal.fire({
            title: 'Error en la solicitud',
            icon: 'error',
            text: `Hubo un error en la solicitud, Causa: ${error}`
        });

    } finally {

        setLoading(false);
        setTelefono(""); setEmail("");

    }
}
