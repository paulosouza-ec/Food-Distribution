const express = require("express");
const router = express.Router();
const Doacao = require("../models/Doacao");

// Criar nova doação
router.post("/", async (req, res) => {
  try {
    const novaDoacao = new Doacao(req.body);
    await novaDoacao.save();
    res.status(201).json(novaDoacao);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar todas as doações
router.get("/", async (req, res) => {
  try {
    const doacoes = await Doacao.find();
    res.json(doacoes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
