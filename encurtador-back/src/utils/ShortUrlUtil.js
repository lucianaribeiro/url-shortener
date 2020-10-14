/* eslint-disable no-console */
const tiyee = require('tiyee-url');
const UrlModel = require('../models/UrlModel');

module.exports = {
  getShortUrl(longUrl) {
    let newShortUrl;
    return new Promise((resolve, reject) => {
      newShortUrl = tiyee.shortUrl(longUrl);
      resolve(newShortUrl);
    });
  },

  async saveData(longer, req) {
    let urlModel;
    const counter = 1;
    let fullUrl = {};
    try {
      const shorter = await this.getShortUrl(longer);
      if (shorter) {
        fullUrl = {
          count: counter,
          longUrl: req.longUrl,
          shortUrl: shorter,
        };
        urlModel = new UrlModel(fullUrl);
        urlModel.save().then(() => {
        });
      }
    } catch (err) {
      console.log(err);
    }
  },
};
