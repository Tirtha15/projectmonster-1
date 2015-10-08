/**
 * ReasonController
 *
 * @description :: Server-side logic for managing reasons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  create: function(req, res) {
    var name = req.body.name;
    var category = req.body.category;
    Reason.create({
      name: name,
      category: category
    }).exec(function(err, reason) {
      if (err) res.serverError(err);
      else res.json(reason);
    });
  },
  update: function(req, res) {
    var name = req.body.name;
    var category = req.body.category;
    Reason.update({
      name: name
    }, {
      category: category
    }).exec(function(err, reason) {
      if (err) res.serverError(err);
      else res.json(reason);
    });
  },
  findAll: function(req, res) {
    Reason.find().exec(function(err, reason) {
      if (err) res.serverError(err);
      else res.json(reason);
    });
  },
  findOne: function(req, res) {
    var name = req.params.name;
    Reason.findOne({
      name: name
    }).exec(function(err, reason) {
      if (err) res.serverError(err);
      else res.json(reason);
    });
  },
  delete: function(req, res) {
    var name = req.body.name;
    Reason.destroy({
      name: name
    }).exec(function(err, reason) {
      if (err) res.serverError(err);
      else res.json(reason);
    });
  }
};