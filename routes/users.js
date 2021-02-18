const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.json({hello: 'from users!!'})
})

router.post('/', (req, res) => {
  res.json({create: 'ok'})
})

module.exports = router