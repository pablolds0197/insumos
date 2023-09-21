const { Schema, model } = require('mongoose');

const InsumoSchema = Schema({
    IdInsumo: {
        type: String,
        required: [true, 'El Id del Insumo es obligatorio']
    },

    NombreInsumo: {
        type: String,
        required: [true, 'El Nombre del Insumo es obligatorio']
    },

    Descripcion: {
        type: String,
        required: [true, 'La Descripción es obligatoria']
    },

    StockMax: {
        type: Number,
        required: [true, 'El Stock Máximo es obligatorio']
    },

    StockMin: {
        type: Number,
        required: [true, 'El Stock Mínimo es obligatorio']
    },

    FechaAdquisicion: {
        type: Date,
        required: [true, 'La Fecha de Adquisición es obligatoria']
    },

    CantidadDisponible: {
        type: Number,
        required: [true, 'La Cantidad Disponible es obligatoria']
    },

    PrecioUnitario: {
        type: Number,
        required: [true, 'El Precio Unitario es obligatorio']
    }
});

// Exportar el modelo Insumo
module.exports = model('Insumo', InsumoSchema);