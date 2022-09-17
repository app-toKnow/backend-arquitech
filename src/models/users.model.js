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
    date_of_birth: {
        type: Date, default: Date.now,
        required: true
    },
    place_of_birh: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    image: {
        type: String
    },    
    phone: {
        type: [Number],
        required: true,
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
    //// se crea por automatico en Mongo//////
    create_at: {
        type: Date, default: Date.now,
        required: true
    },
    last_update: {
        type: Date, default: Date.now,
        required: true
    },
    //////////////////////////////////////////
    // //este campo 8se va a ocupar por el momento no hay con que conectar
    // enrollment: {
    //     type: Number,
    //     required: true,
    //     trim: true
    // },

    // importante hashear contraseñas
    password: {
        type: String,
        required: true,
        trim: true
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
    role: {
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