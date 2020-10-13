const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({

  count: Number,
  longUrl: String,
  shortUrl: String,
});

module.exports = UrlSchema;