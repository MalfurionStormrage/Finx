import axios from 'axios';
import Swal from 'sweetalert2';

const url = 'https://finxx.herokuapp.com';

class productos {

    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    async getProductos(token) {
        try {
            const { data: listProductos } = await axios.get(url + '/productos', {
                headers: { 'x-access-token': token }
            });

            return listProductos;

        } catch (error) { alert('hubo un error', error); }
    }

    async postProductos(datos, token) {
        try {
            const respuesta = await axios.post(url + '/productos', datos, {
                headers: { 'x-access-token': token }
            });

            return respuesta;

        } catch (error) { alert('hubo un error', error); }
    }

    async putProductos(id, datos, token) {
        try {
            const Newdatos = { ...datos, id }
            const respuesta = await axios.put(url + '/productos', Newdatos, {
                headers: { 'x-access-token': token }
            });
            return respuesta;
        } catch (error) {
            console.log('hubo un error , causa :', error)
        }
    }

    async deleteProductos(id, token) {
        try {
            const respuesta = await axios.delete(url + '/productos/' + id, {
                headers: { 'x-access-token': token }
            });

            return respuesta;

        } catch (error) { alert('hubo un error', error); }
    }
}


export const postProducto = async (nombre, descripcion, precio, token) => {
    const Pproducto = new productos(nombre, descripcion, precio);
    const { data } = await Pproducto.postProductos(Pproducto, token);
    if (data.causa === "Unique field already exists") {
        return Swal.fire({
            title: 'El producto que intetas agregar ya se encuentra registrado.',
            icon: "error",
            toast: true,
            timerProgressBar: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 4000,
        });
    }

    return Swal.fire({
        title: 'Productos agregado correctamente.',
        icon: "success",
        toast: true,
        timerProgressBar: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
    });
}

export const putProducto = async (id, nombre, descripcion, precio, token) => {
    const producto = new productos(nombre, descripcion, precio);
    const { data } = await producto.putProductos(id, producto, token)

    if (data.message === "Producto actualizado correctamente") {
        return Swal.fire({
            title: 'Producto actualizado correctamente.',
            icon: 'success',
            toast: true,
            timerProgressBar: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 4000,
        })
    } else if (data.causa === "Unique field already exists") return Swal.fire({
        title: 'El producto que intentas actualizar ya esta registrado.',
        icon: 'error',
        toast: true,
        timerProgressBar: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 4000,
    });

}

export const deleteProductos = async (id, token) => {

    const Pproducto = new productos();
    const { data } = await Pproducto.deleteProductos(id, token);

    if (data.messenger === "Producto eliminado correctamenten.") {
        return Swal.fire({
            title: 'Producto eliminado correctamente.',
            icon: 'success',
            toast: true,
            timerProgressBar: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 4000,
        })
    } else if (data.messenger === "el producto que intentas eliminar no existe") {
        return Swal.fire({
            title: 'el producto que intentas eliminar no existe.',
            icon: 'error',
            toast: true,
            timerProgressBar: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 4000,
        })
    }


}

const producto = new productos;

export default producto;