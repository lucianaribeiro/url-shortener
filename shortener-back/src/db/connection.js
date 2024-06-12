const mongoose = require("mongoose");

module.exports = {
  connect: () =>
    new Promise((resolve) => {
      mongoose.Promise = global.Promise;
      const options = {
        useUnifiedTopology: true,
        keepAlive: true,
        socketTimeoutMS: 540000,
        autoIndex: false,
        poolSize: 10,
        bufferMaxEntries: 0,
        useNewUrlParser: true,
      };

      mongoose
        .connect("mongodb://mongo:27017/shortener-back", options)
        .then(async () => {
          resolve();
        })
        .catch();
    }),
};
