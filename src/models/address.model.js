import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: {

        type: String,
        minlength: 3,
        maxlength: 20,
        required: true,
        trim: true

    },
    num_ext: {
        type: Number,
        min: 5,
        max: 13,
        required: true,
        trim: true
    },
    num_int:{
        type: Number,
        required:false,
        trim: true
    },
    cp:{
        type: Number,
        required:true,
        trim: true
    },
    neighborhood:{
        type:String,
        required: true,
        trim: true
    },
    state:{
        type:String, 
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
   
})

const Address = mongoose.model("address", addressSchema)