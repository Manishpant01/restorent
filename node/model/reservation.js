const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const o_id = mongoose.Schema.Types.ObjectId
const reservation = new Schema({
    PhoneNo :{
        type : Number,
    },
    numbofguests : {
        type :Number,
    },
    date : {
        type : String,
    },
    time : {
        type : String,
    },
    bookby :{
        type : o_id,
        ref : "restaurant",
    }
})

module.exports=mongoose.model('reservation',reservation);