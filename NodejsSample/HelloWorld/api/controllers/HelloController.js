/**
 * HelloController
 *
 * @description :: Server-side logic for managing helloes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getMessage : function(req, res){
		res.send({status : 200, message : 'Welcome to sails fraework'})
	}
};

