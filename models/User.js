import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true, maxlength: 20 },
    lastname: { type: String, required: true, maxlength: 20 },
    age: { type: Number, required: true }
})

export default mongoose.models.User || mongoose.model('User', UserSchema);