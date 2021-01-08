const { Schema, model } = require("mongoose");

const CursosSchema = new Schema(
  {
    nombre: {
      type: string,
    },
    duracion: {
      type: string,
    },
    precio: {
      type: string,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("cursos", CursosSchema, "Cursos");
