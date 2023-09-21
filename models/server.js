const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.insumosPath = '/api/insumos'; // Cambiamos la ruta a 'insumos'
        this.conectarDB();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`);
        });
    }

    routes() {
        this.app.use(this.insumosPath, require('../routes/insumos')); // Cambiamos a 'insumos'
    }

    async conectarDB() {
        await dbConnection();
    }
}

module.exports = Server;