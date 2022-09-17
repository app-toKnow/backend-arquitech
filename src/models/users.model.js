import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true,
        trim : true 
    },
    surname_p: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true,
        trim : true 
    },
    surname_m: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true,
        trim : true 
    },
    age: {
        type: Number,
        min: 5,
        max: 13,
        required: true
    },
    dob: {
        type: Date, default: Date.now
    },
    pob: {
        type: String
    },
    gener: {
        type: String,
        enum: ['male', 'female']
    },
    image: {
        type: String
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/,
        trim : true 
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'address'
    },
    create_at: {
        type: Date, default: Date.now
    },
    last_update: {
        type: Date, default: Date.now
    },
    enrollment: {
        type: Number
    },
    password: {
        type: String
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    status: {
        type: Boolean
    },
    permission: {
        type: String,
        enum: ['admin', 'teacher', 'parent']
    }
})

const User = mongoose.model("users", userSchema)