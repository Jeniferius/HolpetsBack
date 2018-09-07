var express = require('express');
var router = express.Router();
const modelUsuario = require('../../models/usuarios')

router.post('/', (req, res) => {
    modelUsuario.login(req.body, (err, result) => {
        if (err) return console.log(err);

        if (result == "") {
            res.json(null)
        } else {
           res.json(result); 
        }

    });
});

module.exports = router;