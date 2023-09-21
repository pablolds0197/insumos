const { Router } = require('express');
const route = Router();

// Importar métodos del controlador
const { insumosGet, insumosPost, insumosPut, insumosDelete } = require('../controllers/insumos'); // Cambiamos "historiamovimiento" por "insumos"

route.get('/', insumosGet); // Listar Datos

route.post('/', insumosPost); // Insertar Datos

route.put('/', insumosPut); // Actualizar Datos

route.delete('/', insumosDelete); // Eliminar Datos

module.exports = route;