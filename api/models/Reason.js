/**
* Reason.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	id:{
  		type: 'string',
      size: 36,
      primaryKey: true,
      unique: true,
  	},
  	name:{
  		type: 'string',
  	},
  	category:{
  		type: 'string',
  	},

  }
};

