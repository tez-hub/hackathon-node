import mongoose from 'mongoose';

const AdvocateSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    company: {
        type: [String],
    },
    twitter: {
        type: mongoose.Types.ObjectId,
        ref: "Company"
    }
})

export default mongoose.model("Advocate", AdvocateSchema)