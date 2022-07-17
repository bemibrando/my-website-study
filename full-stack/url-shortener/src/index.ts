import { MongoConnection } from './database/MongoConnection';
import express, { Request, Response } from 'express';
import { URLController } from './controller/URLController';

const api = express();

api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);	

// Initialize Server
api.listen(5000, () => {
    console.log('Server is running on port 5000');
});