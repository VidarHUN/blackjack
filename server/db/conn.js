const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
      client.connect(function (err, db) {
        if (err || !db) {
          return callback(err);
        }

        dbConnection = db.db('blackjack_db');
        console.log('Successfully connected to MongoDB.');

        return callback();
      });
    },

    getDb: function () {
      return dbConnection;
    },
};