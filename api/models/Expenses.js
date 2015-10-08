/**
 * Expenses.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
  attributes: {
    id: {
      type: 'string',
      size: 36,
      primaryKey: true,
      unique: true,
    },
    amount: {
      type: 'int',
      numeric: true,
      required: true,
    },
    currency: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    day: {
      type: 'string',
    },
    location: {
      type: 'string',
    },
    user: {
      model: 'user',
    },
    reason: {
      model: 'reason',
    },
  },
  beforeCreate: function(values, next) {
    if (values.id) {
      delete values.id;
    }
    values.id = utils.uuid();
    next();
  }
};