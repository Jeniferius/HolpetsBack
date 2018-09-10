var express = require('express');
var router = express.Router();
const modelUsuario = require('../../models/usuarios')

router.get('/', (req, res) => {
    modelUsuario.getAllCuidadores((err, result) => {
        if (err) return console.log(err);
        res.json(result); 
    });
});

module.exports = router;