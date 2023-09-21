const { response } = require('express');
const Insumos = require('../models/insumos'); // Cambiamos el nombre del modelo a "Insumos"

// Método GET de la API
const insumosGet = async (req, res = response) => {
    // Consultar todos los insumos
    const insumos = await Insumos.find();

    res.json({
        insumos
    });
};

// Método POST de la API
const insumosPost = async (req, res) => {
    let mensaje = 'Inserción Exitosa';
    const body = req.query; // Captura de atributos
    try {
        const { IdInsumo, NombreInsumo, Descripcion, StockMax, StockMin, FechaAdquisicion, CantidadDisponible, PrecioUnitario } = body;
        const insumo = new Insumos({ IdInsumo, NombreInsumo, Descripcion, StockMax, StockMin, FechaAdquisicion, CantidadDisponible, PrecioUnitario }); // Instanciando el objeto
        await insumo.save(); // Inserta en la colección
    } catch (error) {
        mensaje = error;
        console.log(error);
    }
    res.json({
        msg: mensaje
    });
};

// Modificación
const insumosPut = async (req, res = response) => {
    const { IdInsumo, NombreInsumo, Descripcion, StockMax, StockMin, FechaAdquisicion, CantidadDisponible, PrecioUnitario } = req.query;
    let mensaje = 'Modificación exitosa';
    try {
        await Insumos.findOneAndUpdate({ IdInsumo: IdInsumo },
            { NombreInsumo, Descripcion, StockMax, StockMin, FechaAdquisicion, CantidadDisponible, PrecioUnitario });
    } catch (error) {
        mensaje = 'Se presentaron problemas en la modificación.';
    }
    res.json({
        msg: mensaje
    });
};

// Eliminación
const insumosDelete = async (req, res = response) => {
    const { _id } = req.query;
    let mensaje = '';
    try {
        const insumo = await Insumos.deleteOne({ _id: _id });
    } catch (error) {
        mensaje = 'Se presentaron problemas en la eliminación';
    }
    res.json({
        msg: mensaje
    });
};

module.exports = {
    insumosGet,
    insumosPost,
    insumosPut,
    insumosDelete,
};






