var mongoose = require("mongoose");

var bankSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
		city: String,
		district: String,
		bank_name: String,
		ifsc: String,
		bank_id: Number,
		state: String,
		branch: String,
		address: String
	});

bankSchema.index({ city: 'text', district: 'text', bank_name: 'text', ifsc: 'text', bank_id: 'text', state: 'text', branch: 'text', address: 'text'});

module.exports =  mongoose.model('Bank', bankSchema, "Bank");