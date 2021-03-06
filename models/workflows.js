var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var User = require('./user.js')

var workflowsSchema = new Schema({
	user: [
      {type: Schema.Types.ObjectId, ref: 'User'}
    ],
    workflowdata: Object,
})
var workflows = module.exports = mongoose.model('workflows', workflowsSchema);

module.exports.gettasks = function(callback){
	var query = {};
	workflows.findOne(query, callback);
}

// module.exports.getfolderbyId = function(folderid, callback){
// 	var query = {folderid: folderid};
// 	folder.find(query, callback);
// }