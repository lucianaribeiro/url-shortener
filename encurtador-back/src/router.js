const express = require('express');
const UrlModel = require('./models/UrlModel');
const shortUrl = require('./utils/ShortUrlUtil');

const router = express.Router();

router.get('/', (_, res) => {
  res.json('WELCOME!!');
});

router.get('/urls', (_, res) => {
  UrlModel.findAll().then((url) => {
    res.json(url);
  });
});

router.delete('/deleteUrl', (req, res) => {
  const urlModel = new UrlModel(req.body);
  urlModel.deleteMe().then((url) => {
    res.json(url);
  });
});

router.post('/saveUrl', (req, res) => {
  const urlModel = new UrlModel(req.body);
  urlModel.findMe().then((url) => {
    if (url.length <= 0) {
      const longer = req.body.longUrl;
      shortUrl.saveData(longer, req.body).then(() => {
        res.json(url);
      });
    } else {
      let counter = url[0].count;
      counter += 1;
      url[0].count = counter;
      const newModel = new UrlModel(url[0]);

      newModel.setCount(counter);

      newModel.deleteMe().finally(() => {
        newModel.save().then((urlResponse) => {
          res.json(urlResponse);
        });
      });
    }
  });
});

router.get('/ranking', (_, res) => {
  UrlModel.getRanking().then((ranking) => {
    res.json(ranking);
  });
});

module.exports = (app) => app.use('/', router);
