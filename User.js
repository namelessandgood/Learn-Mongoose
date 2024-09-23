const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
	street: String,
	city: String,
});

const userSchema = new mongoose.Schema({
	name: String,
	age: {
		type: Number,
		min: 1,
		max: 100,
		// validate: {
		// 	validator: (v) => v % 2 === 0,
		// 	message: (props) => `${props.value} is not even numbers`,
		// },
	},
	email: {
		minLenght: 10,
		type: String,
		required: false,
	},
	createAt: {
		type: Date,
		immutable: true,
		default: () => Date.now(),
	},
	updateAt: {
		type: Date,
		immutable: true,
		default: () => Date.now(),
	},
	bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
	hobbies: [String],
	address: {
		type: addressSchema,
	},
});

// make function for call when is get the query
userSchema.methods.hello =function(){
    console.log(`hello there ${this.name}`);
};

// this return data where age === the age in collections 
userSchema.statics.findByAge = function(age){
    return this.find({age: age});
}

// this return data where name === the name in collections 
userSchema.statics.findByName = function (name) {
	return this.find({name:new RegExp(name,'i')});
};

// it use when query is already call not first call 
// use => find or where method to call them 
userSchema.query.byName = function (name) {
	return this.where({ name: new RegExp(name, 'i') });
};



userSchema.virtual('nameAge').get(function () {
	return `${this.name} ${this.age}`;
});

// when save is call the function 
userSchema.pre('save',function(next) {
    this.updateAt = Date.now();
    next();
})

//after the save this call function
// doc is user object
userSchema.post('save', function (doc, next) {
	doc.hello();
	next();
});
module.exports = mongoose.model('User', userSchema);
