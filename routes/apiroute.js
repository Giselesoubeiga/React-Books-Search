const Book = require("../models/books");

module.exports = function(app) {
    app.get('/api/books', function (req, res) {
        Book.find({})
          .then(function (data) {
            res.json(data);
          })
          .catch(function (err) {
            res.json(err);
          });
    });
    
    
    app.post('/api/books', function (req, res) {
       Book.create(req.body)
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
    })


    app.delete('/api/books/:id', function (req, res) {
        Book.findOneAndDelete({_id: req.params.id})
          .then(function (data) {
            res.json(data);
          })
          .catch(function (err) {
            res.json(err);
          });
    });

    
}