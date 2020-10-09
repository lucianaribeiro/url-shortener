const express = require('express');
const UrlModel = require('./models/UrlModel');
const { url } = require('./models/UrlModel');

const router = express.Router();

router.get('/', (_, res) => {
  res.json('WELCOME!!');
});

router.get('/urls', (_, res) => {
  UrlModel.findAll().then((url) => {
    res.json(url);
  })
})

router.delete('/deleteUrl', (req, res) => {
  const urlModel = new UrlModel(req.body);
  urlModel.deleteMe().then((url) => {
    res.json(url);
  })
})

router.post('/saveUrl', (req, res) => {
  const urlModel = new UrlModel(req.body);

  urlModel.findMe().then((url) => {

    console.log(url)
    if (url.length <= 0) {
      urlModel.save().then((url) => {
        res.json(url);
      })
    } else {
      //update
    }
    res.json(url);
  })


});

module.exports = (app) => app.use('/', router);
