const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "name required"],
        minlength: [3, "Name must be at least 3 characters"],
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [8, "Password must be at least 8 characters long"] 
        },
    },
    {timestamps: true}
);

AdminSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

AdminSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
    });

AdminSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
        });
});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;