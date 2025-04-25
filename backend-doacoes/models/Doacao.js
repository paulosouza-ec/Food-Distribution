const mongoose = require("mongoose");

const DoacaoSchema = new mongoose.Schema({
  nomeDoador: String,
  alimento: String,
  quantidade: String,
  local: String,
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Doacao", DoacaoSchema);