import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({

group: {
    year: {
        type: Number,
        required: true,
        trim: true
    },

    grade: {
        type: String,
        required: true,
        trim: true
    }
},
// reflexionar si es preferible dar de alta al papá en el grupo
    studens: {
    type: Schema.Types.ObjectId,
    ref: 'User'
},
    teachers: {
    type: Schema.Types.ObjectId,
    ref: 'User'
},
    subjects: {
    type: Schema.Types.ObjectId,
    ref: 'Subject'
}

})

const Group = mongoose.model("group", groupSchema)