var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var list = require('../models/todoList');

/* GET ALL ITEMS */
router.get('/', (req, res, next) => {
  list.find((err, item)=> {
    if (err) return next(err);
    res.json(item);
  });
});

/* GET SINGLE ITEM BY ID */
router.get('/:id',(req, res, next) => {
  list.findById(req.params.id,(err, item) =>{
    if (err) return next(err);
    res.json(item);
  });
});

/* SAVE ITEM */
router.post('/', (req, res, next) =>{
  list.create(req.body,(err, item) =>{
    if (err) return next(err);
    res.json(item);
  });
});

/* UPDATE ITEM */
router.put('/:id', (req, res, next) =>{
  list.findByIdAndUpdate(req.params.id, req.body,(err, item) =>{
    if (err) return next(err);
    res.json(item);
  });
});

/* DELETE ITEM */
router.delete('/:id',(req, res, next) =>{
  list.findByIdAndRemove(req.params.id, req.body,(err, item) =>{
    if (err) return next(err);
    res.json(item);
  });
});

module.exports = router;