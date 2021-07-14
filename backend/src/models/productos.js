import { Schema, model } from 'mongoose';

const productos = new Schema(
    {
        nombre: {
            type: String,
            require: true,
            unique:true,
            trim: true,
            maxlength: 30
        },
        descripcion: {
            type: String,
            require: true,
            trim: true,
            maxlength: 200
        },
        precio: {
            type: Number,
            require: true,
            trim: true,
            maxlength: 8
        }
    },
    {
        timestamps: true
    }
)

export default model('productos', productos);