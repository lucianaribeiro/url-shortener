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
    console.log(url);
    if (url.length <= 0) {
      console.log("SALVOOOU");
      const longer = req.body.longUrl;
      shortUrl.saveData(longer, req.body, res);
    } else {
      console.log("AAAAAACHOU");
      // update
    }
    res.json(url);
  });

  // urlModel.findMe().then((url) => {
  //   if(url) {
  //     urlModel.update()
  //     res.json(url)
  //     return;
  //   };

  //   //encurtar url
  //   //salvar a url encurtada dentro da urlModel
  //   urlModel.save()
  //   res.json(urlModel)
  // });
});

module.exports = (app) => app.use('/', router);
