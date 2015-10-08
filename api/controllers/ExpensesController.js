/**
 * ExpensesController
 *
 * @description :: Server-side logic for managing expenses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  create: function(req, res) {
    var id = req.body.id;
    var amount = req.body.amount;
    var currency = req.body.currency;
    var description = req.body.description;
    var day = req.body.day;
    var location = req.body.location;
    Expenses.create({}).exec(function(err, user) {
      if (err) res.serverError(err);
      else res.json(user);
    });
  },
  find: function(req, res) {
    var id = req.body.id;
    Expenses.find({
      id: id
    }).exec(function(err, user) {
      if (err) res.serverError(err);
      else res.json(user);
    });
  },
  delete: function(req, res) {
    var id = req.body.id;
    Expenses.delete({
      id: id
    }).exec(function(err, user) {
      if (err) res.serverError(err);
      else res.json(user);
    });
  },
  findAll: function(req, res) {
    Expenses.findAll().exec(function(err, user) {
      if (err) res.serverError(err);
      else res.json(user);
    });
  },
  update: function(req, res) {
    var mobile = req.body.mobile;
    Expenses.update({
      id: id
    }, {
      amount: amount,
      description: description
    }).exec(function(err, user) {
      if (err) res.serverError(err);
      else res.json(user);
    });
  }
};