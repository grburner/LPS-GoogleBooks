const db = require("../models");
const fetch = require("node-fetch");
const axios = require("axios");

const key = 'AIzaSyA8sX6HxJ81KQ1pUufSXWnzBzX46iVqxqA'

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getSearchBook: function(req, res) {
    const query = req.params.search
    const queryString = encodeURI(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`)
    console.log(queryString)
    axios.get(queryString)
    .then(data => {
      res.send(data.data)
    })
  }
};