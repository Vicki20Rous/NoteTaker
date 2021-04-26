var path = require('path');
var router = require('express').Router();


router.get('/notes', (_req,res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
});

router.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});