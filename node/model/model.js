const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;


const schema = mongoose.Schema;
const restaurant = new schema({
    f_name:{type:String},
    l_name:{type:String},
    email:{type:String,unique:true},
    username :{type:String},
    password: {type:String,select:false},
    is_deleted:{type:Boolean,default:false,select:false},
    role:{type:String,
        enum:['admin','user']
    },
})
restaurant.pre('save', function(next) {
    var user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

restaurant.methods.comparePassword = function(candidatePassword, cb) {
    console.log("candi",candidatePassword)
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('restaurant',restaurant);