/**
 * IncomeController
 *
 * @description :: Server-side logic for managing incomes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  create: function(req, res) {
    var amount = req.body.amount;
    var currency = req.body.currency;
    var description = req.body.description;
    var day = req.body.day;
    var location = req.body.location;
    var user = req.body.user;
    var reason = req.body.reason;
    Income.create({
      amount: amount,
      currency: currency,
      description: description,
      location: location,
      user: user,
      reason: reason
    }).exec(function(err, income) {
      if (err) res.serverError(err);
      else res.json(income);
    });
  },
  update: function(req, res) {
    var id = req.body.id;
    Income.update({
      id: id
    }, {}).exec(function(err, income) {
      if (err) res.serverError(err);
      else res.json(income);
    });
  },
  find: function(req, res) {
    Income.find().exec(function(err, income) {
      if (err) res.serverError(err);
      else res.json(income);
    });
  },
  findOne: function(req, res) {
    var id = req.body.id;
    Income.findOne({
      id: id
    }).exec(function(err, income) {
      if (err) res.serverError(err);
      else res.json(income);
    });
  },
  delete: function(req, res) {
    var id = req.body.id;
    Income.delete({
      id: id
    }).exec(function(err, income) {
      if (err) res.serverError(err);
      else res.json(income);
    });
  }
};