import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user: {
        name: {
            type: String,
            minlength: 3,
            maxlength: 20,
            required: true,
            trim: true
        },
        surname_p: {
            type: String,
            minlength: 3,
            maxlength: 20,
            required: true,
            trim: true
        },
        surname_m: {
            type: String,
            minlength: 3,
            maxlength: 20,
            required: true,
            trim: true
        },
    },


    age: {
        type: Number,
        min: 5,
        max: 13,
        required: true,
        trim: true
    },
    date_of_birth: {
        type: Date, default: Date.now,
        required: true
    },
    place_of_birh: {
        type: String,
        required: true
    },
    gener: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    image: {
        type: String
    },
    cell_phone:{
        type:Number,
        trim: true
    },
    phone_1: {
        type: Number,
        required: true,
        trim: true
    },
    phone_2: {
        type: Number,
        trim: true
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/,
        trim: true,
        required: true
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'address',
        required: true
    },
    create_at: {
        type: Date, default: Date.now,
        required: true
    },
    last_update: {
        type: Date, default: Date.now,
        required: true
    },
    enrollment: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    status: {
        type: Boolean,
        default: 1
    },
    permission: {
        type: String,
        enum: ['admin', 'teacher', 'parent']
    },
    notice: {
        type: Schema.Types.ObjectId,
        ref: 'Notice'
    },
    parents: {
        type: Schema.Types.ObjectId,
        ref: 'parents'
    }
})

const User = mongoose.model("users", userSchema)