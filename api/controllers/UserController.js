/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:function(req,res){
		sails.log.verbose("Reaching");
		var id="kjsasa-sjdj234-sjdslaj-jklaj1";
		var name=req.body.name;
		var email=req.body.email;
		var mobile=req.body.mobile;
		var deviceId=req.body.deviceId;

		User.create({id:id,name:name,email:email,mobile:mobile,deviceId:deviceId}).exec(function(err,user){

			if(err)
				res.serverError(err);
            else
            	res.json(user);
        });
    },
    find:function(req,res){
		
        User.find().exec(function(err,user){

			if(err)
				res.serverError(err);
			else
				res.json(user);
	    });
    },

    delete:function(req,res){
    	var mobile=req.body.mobile;
        sails.log("chunku",mobile);
    	User.destroy({mobile:mobile}).exec(function(err,user){
              
            if(err)
              	res.serverError(err);
            else
              	res.json(user);
        });
    },

    findOne:function(req,res){
    	var mobile=req.params.mobile;

    	User.findOne({mobile:mobile}).exec(function(err,user){
            if(err)
            	res.serverError(err);
            else
            	res.json(user);
        });
    },
    
    update:function(req,res){
    	var mobile=req.body.mobile;
    	var email=req.body.email;
    	var name=req.body.name;

    	User.update({mobile:mobile},{email:email,name:name}).exec(function(err,user){
    		if(err)
    			res.serverError(err);
    		else
    			res.json(user);
    	});
    }

	
};

