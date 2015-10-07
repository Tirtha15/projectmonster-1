/**
 * User.js
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
    name: {
    	type:'string'
    },
    email: {
    	type:'email'
    },
    mobile: {
      type: 'string',
      unique: true,
      numeric: true,
      maxLength: 10,
      minLength: 10,
      required: true,
    },
    deviceId: {
    	type:'string'
    },
  }
};