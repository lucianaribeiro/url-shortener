/* eslint-disable no-self-assign */
/* eslint-disable lines-between-class-members */
const mongoose = require('mongoose');
const tiyee = require('tiyee-url');
const UrlSchema = require('../schemas/urlSchema');

const UrlModel = mongoose.model('UrlModel', UrlSchema);

module.exports = class Url {
  constructor(url) {
    this.url = new UrlModel({
      count: url.count,
      longUrl: url.longUrl,
      shortUrl: url.shortUrl,
    });
  }
  save() {
    return new Promise((resolve) => {
      this.url.save().then(() => {
        resolve(this.url);
      });
    });
  }

  deleteMe() {
    return new Promise((resolve, reject) => {
      UrlModel.deleteOne({ longUrl: this.url.longUrl },
        (err) => {
          if (err) {
            reject(err);
          }
        }).then((longUrl) => {
        if (longUrl) {
          this.longUrl = longUrl;
          resolve(longUrl);
        }
        resolve({});
      });
    });
  }

  static findAll() {
    return new Promise((resolve) => {
      UrlModel.find({},
        (err) => {
          if (err) {
            resolve({});
          }
        }).then((url) => {
        if (url) {
          this.url = url;
          resolve(url);
        }
        resolve({});
      });
    });
  }

  findMe() {
    return new Promise((resolve) => {
      UrlModel.find({ longUrl: this.url.longUrl },
        (err) => {
          if (err) {
            resolve({});
          }
        }).then((longUrl) => {
        if (longUrl) {
          this.longUrl = longUrl;
          resolve(longUrl);
        }
        resolve({});
      });
    });
  }

  shortUrl(longUrl) {
    return new Promise((resolve) => {
      tiyee.shortUrl(longUrl).then((shortUrl) => {
        if (shortUrl) {
          this.shortUrl = this.shortUrl;
          resolve(shortUrl);
        }
        resolve({});
      });
    });
  }
};
