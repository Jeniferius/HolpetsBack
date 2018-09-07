var express = require('express');
var router = express.Router();
const modelUsuario = require('../../models/usuarios')

// router.get('/', (req, res)=>{
// 	modelUsuario.getAll((err,rows)=>{
//         console.log('eeeeeeeeee');
//         res.json(rows);
// 	})
// })

router.post('/', (req, res) => {
        console.log(req.body);
        modelUsuario.insert(req.body, (err, result) => {
                if (err) return console.log(err);
                console.log(result);
                res.json(result);
        });

})

module.exports = router;