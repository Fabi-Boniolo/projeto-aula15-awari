const express = require('express');
import mongoose from './config/mongo';
const rotaCurso = require('./rotas/curso');

const app = express();

app.use('/cursos',rotaCurso);


app.use((erro, req, res, next) => {
    res.status(500).send({message: "Erro interno do servidor"});
    });

export default app;