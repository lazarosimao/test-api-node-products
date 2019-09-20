const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Iniciando o APP
const app = express();
//Para permitir o recebimento de dados em json
app.use(express.json());
app.use(cors());

//Iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser:true });
requireDir('./src/models/');

app.use('/api', require("./src/routes"));
const porta = process.env.PORT || 8080;
app.listen(porta);