import jwt from 'jsonwebtoken';
import { Router } from 'express';
import { deleteProducto, getProducto, postProducto, putProducto } from '../controllers/productos';
const Productos = Router();

//middleware
const verificarToken = (req, res, next) => {
    try {

        const token = req.headers['x-access-token'];

        if (!token) {
            return res.json({ message: 'No posees las credenciales de acceso' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err) => {
            if (err) {
                return res.json({ message: 'No posees las credenciales de acceso' });
            }

            next();
        })

    } catch (error) {

        return res.json({
            message: 'Hubo un error',
            causa: error
        });

    }
}

Productos.route('/productos/')
    .get(verificarToken, getProducto)
    .put(verificarToken, putProducto)
    .post(verificarToken, postProducto)
Productos
    .delete('/Productos/:id', verificarToken, deleteProducto);

export default Productos;