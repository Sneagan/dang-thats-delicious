const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const eric = { name: 'Eric', age: 36, cool: true };
  // res.send('Hey! It works!');
  // res.json(eric);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
    name: 'Eric',
    dog: req.query.dog
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [ ...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
