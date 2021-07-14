import productos from '../models/productos';
import { errorHandler } from '../helpers/errorHandler';

export const getProducto = async (req, res) => {
    try {

        const listProductos = await productos.find();
        return res.status(200).json({ listProductos });

    } catch (error) {

        return res.json({
            message: 'Hubo un error',
            causa: errorHandler(error)
        });
    }
}

export const postProducto = async (req, res) => {
    try {

        const { nombre, descripcion, precio } = req.body;
        const producto = new productos({ nombre, descripcion, precio });

        await producto.save();
        return res.status(200).json({ messenger: "Producto agregado correctamente." });

    } catch (error) {

        return res.json({
            message: 'Hubo un error',
            causa: errorHandler(error)
        });
    }
}

export const putProducto = async (req, res) => {
    try {

        const { nombre, descripcion, precio } = req.body;
        await productos.findByIdAndUpdate(req.body.id, { nombre, descripcion, precio }, { new: true });

        return res.status(200).json({
            message: 'Producto actualizado correctamente'
        });

    } catch (error) {

        return res.json({
            message: 'Hubo un error',
            causa: errorHandler(error)
        });
    }
}

export const deleteProducto = async (req, res) => {
    try {

        const producto = await productos.findById({ _id: req.params.id });
        if (!producto) {
            return res.json({ message: 'el producto que intentas eliminar no existe' });
        }

        producto.remove();

        return res.status(200).json({ messenger: 'Producto eliminado correctamenten.' });

    } catch (error) {

        return res.json({
            message: 'Hubo un error',
            causa: errorHandler(error)
        });
    }
}