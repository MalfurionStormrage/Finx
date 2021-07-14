import { Schema, model } from 'mongoose';
import jwt from 'bcryptjs';

const user = new Schema(
    {
        nombre: {
            type: String,
            require: true,
            trim: true,
            maxlength: 25
        },
        apellido: {
            type: String,
            require: true,
            trim: true,
            maxlength: 25
        },
        telefono: {
			type: Number,
			unique: true,			
			require: true,
			trim: true,
			maxlength: 10,
        },
        email: {
            type: String,
            unique: true,
            require: true,
            trim: true,
            maxlength: 35
        },
        password: {
            type: String,
            require: true,
            trim: true,
        },
        nivel:{
            type:Number,
            require:true,
            trim:true,
            maxlength: 2
        }
    },
    {
        timestamps: true
    }
);

user.methods.encryptPassword = async (password) => {
    const salt = await jwt.genSalt(10);
	return jwt.hash(password, salt);
};

user.methods.validatePassword = function (password) {
    return jwt.compare(password , this.password);
}

export default model('user', user);