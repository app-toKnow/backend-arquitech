import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    subtitle: {
        type: String
    },
    content: {
        required: true,
        type: String,
    },
    image: {
        type: String
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    create_at: {
        type: Date, default: Date.now
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date_public: {
        type: Date, default: Date.now,
        required: true
    },
    status: {
        type: Boolean,
        default: 0
    }


})

const Notice = mongoose.model("notice", noticeSchema)