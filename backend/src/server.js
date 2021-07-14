if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
}

//dependencies
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const path = require('path');

//imports
import { connection } from './database'
import index from './routes';

//setting
const server = express();
server.set('port', process.env.PORT || 4001);

//middlewares
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//connection db
connection();

//routes
server.use(index.auth);
server.use(index.productos);

//file static
server.use(express.static(path.join(__dirname , 'public')));

//export default
export default server;