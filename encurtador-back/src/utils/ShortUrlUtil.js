/* eslint-disable no-console */
var shortUrl = require('node-url-shortener');
const UrlModel = require('../models/UrlModel');

module.exports = {
  getShortUrl(longUrl) {
    return new Promise((resolve, reject) => {
      shortUrl.short(longUrl, (err, url) => {
        console.log("URL", url);
        resolve(url);
      });
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
