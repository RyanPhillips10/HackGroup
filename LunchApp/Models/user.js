var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema ({
    name: String,
    phone: String,
    group: String,
    isGoing: Boolean,
    isActive: Boolean,
    isInsider: Boolean
});

mongoose.model('user', userSchema );