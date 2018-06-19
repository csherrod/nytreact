const db = require('../models')
const request = require('request')

// Defining methods for the articlesController
module.exports = {
  findAll: function (req, res) {
    console.log('searching db for all saved articles')
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function (req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function (req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  search: function (req, res) {
    console.log('searching for nytimes articles')
    const APIKEY = 'c8e1389a77a74a00b8b5c76f8dcdea19'
    let searchterms = 'top+stories'
    if (req.params.query) {
      console.log('query attached')
      searchterms = req.params.query
    }

    console.log('searchterms: ' + req.params.query)
    // Built by LucyBot. www.lucybot.com
    request.get({
      url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      qs: {
        'api-key': APIKEY,
        'fq': searchterms
      }
    }, function (err, response, body) {
      body = JSON.parse(body)
      console.log(body)
      res.send(body)
    })
  }

}
