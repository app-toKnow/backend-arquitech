import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: {

        type: String,
        minlength: 3,
        maxlength: 20,
        required: true,
        trim: true

    },
    extNumber: {
        type: Number,
        min: 5,
        max: 13,
        required: true,
        trim: true
    },
    intNumber:{
        type: Number,
        required:false,
        trim: true
    },
    postalCode:{
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