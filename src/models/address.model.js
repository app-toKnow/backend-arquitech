import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: {

        type: String,
        minlength: 3,
        maxlength: 20,
        required: true,
        trim: true

    },
    number: {
        type: Number,
        min: 5,
        max: 13,
        required: true
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
   
})

const Address = mongoose.model("address", addressSchema)