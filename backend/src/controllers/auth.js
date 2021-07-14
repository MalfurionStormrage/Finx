import user from '../models/user';
import { errorHandler } from '../helpers/errorHandler';
import jwt from 'jsonwebtoken';

export async function signup(req, res) {
    try {

        const { nombre, apellido, telefono, email, password } = req.body;

        const usuario = new user({ nombre, apellido, telefono, email, password, nivel: 3 });
        usuario.password = await usuario.encryptPassword(password)
        await usuario.save();

        return res.status(200).json({
            message: 'Usuario registrado'
        });

    } catch (error) {

        return res.json({
            message: errorHandler(error)
        });
    }
}

export async function signin(req, res) {
    try {

        const usuario = await user.findOne({ email: req.body.email });

        if (!usuario) {
            return res.json({
                message: 'Dirección de correo electrónico no válida.'
            });
        }

        const validatedPassword = await usuario.validatePassword(req.body.password);

        if (!validatedPassword) {
            return res.json({
                message: 'La contraseña que ingresaste es incorrecta.'
            });
        }
        
        const token = jwt.sign({ id: usuario._id  , nivel:usuario.nivel}, process.env.JWT_SECRET, {
            expiresIn: 60 * 60
        });

        return res.status(200).json({
            message: 'success',
            token
        });

    } catch (error) {

        // console.log(error);

        return res.status(400).json({
            message: errorHandler(error)
        });
    }
}

export function islogin(req, res) {
    try {
        const token = req.headers['x-access-token'];

        if (!token) {
            return res.json({
                message: 'No posees las credenciales de acceso'
            });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, enconde) => {
            if (err) {
                return res.json({
                    Vtoken: "",
                    auth: false,
                    log: false,
                    message: 'invalid token'
                });
            }

            res.json({
                auth: true
            })
        });

    } catch (error) {

        // console.log(error);

        return res.status(400).json({
            message: errorHandler(error)
        });
    }
}