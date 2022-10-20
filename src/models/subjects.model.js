import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    name: {
        type: Number,
        required: true,
        trim : true 
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }       
})

const Subject = mongoose.model("subject", subjectSchema)