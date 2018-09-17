var express = require('express');
var router = express.Router();
const modelChat = require('../../models/chat')

router.post('/', (req, res) => {
    console.log(req.body);
    modelChat.getPorId(req.body, (err, result) => {
        if (err) return console.log(err.message);
        res.json(result);
    })
})

module.exports = router;

