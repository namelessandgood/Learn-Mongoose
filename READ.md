# Mongoose ORM in JavaScript

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It helps to manage relationships between data, provides schema validation, and helps to translate between objects in code and their representation in MongoDB.

## Prerequisites

- **Node.js**: Install Node.js from [here](https://nodejs.org/).
- **MongoDB**: Install MongoDB locally from [here](https://www.mongodb.com/try/download/community) or use a cloud database like MongoDB Atlas.

## Setup

1.Initialize your project:

   ```bash
   mkdir my-mongoose-app
   cd my-mongoose-app
   npm init -y
   ```

2.Install required dependencies:

   ```bash
   npm install mongoose
   ```

## Connecting to MongoDB

1. First, create a `server.js` file in the root of your project.

2. Import mongoose and establish a connection to MongoDB:

   ```js
   const mongoose = require('mongoose');

   mongoose.connect('mongodb://localhost:27017/myDatabase', { 
     useNewUrlParser: true, 
     useUnifiedTopology: true 
   })
   .then(() => console.log('MongoDB connected...'))
   .catch(err => console.log(err));
   ```

## Defining a Mongoose Schema and Model

A **Schema** defines the structure of the documents within a MongoDB collection, while a **Model** is a wrapper for the schema that allows for interaction with the data.

```js
const mongoose = require('mongoose');

// Define a schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: Number,
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Create a model
const User = mongoose.model('User', UserSchema);

module.exports = User;
```

## Creating and Saving Documents

To create and save a new document in the database, use the `save()` method:

```js
const User = require('./models/User');

// Create a new user instance
const newUser = new User({
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 30
});

// Save to the database
newUser.save()
  .then(user => console.log('User saved:', user))
  .catch(err => console.log(err));
```

## Finding Documents

You can query the database using methods like `find()`, `findOne()`, and `findById()`.

```js
const User = require('./models/User');

// Find all users
User.find()
  .then(users => console.log(users))
  .catch(err => console.log(err));

// Find a user by email
User.findOne({ email: 'john.doe@example.com' })
  .then(user => console.log(user))
  .catch(err => console.log(err));
```

## Updating Documents

You can update documents using methods like `updateOne()`, `updateMany()`, or `findByIdAndUpdate()`.

```js
const User = require('./models/User');

// Update a user by email
User.updateOne({ email: 'john.doe@example.com' }, { age: 31 })
  .then(() => console.log('User updated'))
  .catch(err => console.log(err));

// Update and return the updated document
User.findByIdAndUpdate('USER_ID', { name: 'Jane Doe' }, { new: true })
  .then(updatedUser => console.log(updatedUser))
  .catch(err => console.log(err));
```

## Deleting Documents

To delete a document, use methods like `deleteOne()`, `deleteMany()`, or `findByIdAndDelete()`.

```js
const User = require('./models/User');

// Delete a user by ID
User.findByIdAndDelete('USER_ID')
  .then(() => console.log('User deleted'))
  .catch(err => console.log(err));
```

## Validations and Middleware

Mongoose allows for custom validation and middleware (hooks) that can be executed before or after a certain operation.

### Example: Adding Custom Validation

```js
const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
  }
});
```

### Example: Pre-save Middleware

```js
UserSchema.pre('save', function(next) {
  // Modify or check something before saving
  console.log('User is being saved');
  next();
});
```

## Conclusion

Mongoose simplifies interactions with MongoDB by providing a structured and easy-to-use API. This guide introduced you to the basics of connecting, creating, querying, updating, and deleting documents. You can expand your knowledge by exploring more advanced Mongoose features like population, virtuals, and more complex queries.

## Further Resources

- [Mongoose Official Documentation](https://mongoosejs.com/)
- [MongoDB Official Documentation](https://docs.mongodb.com/)
- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Express.js](https://expressjs.com/)
- [RESTful API Design](https://restfulapi.net/)
- [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [ES6 Features](https://www.w3schools.com/js/js_es6.asp)
- [JavaScript Best Practices](https://www.w3schools.com/js/js_best_practices.asp)

```text
This Markdown guide should give you a good starting point for learning Mongoose ORM in JavaScript.
```
