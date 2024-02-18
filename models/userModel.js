const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      validate: {
        validator: function (value) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
            
        },
        message: 'Invalid email address format'
      },
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },{
      timestamps: true
  });

  module.exports = mongoose.model('User',userSchema)
  