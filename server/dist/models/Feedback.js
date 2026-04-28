import mongoose, { Schema } from 'mongoose';
const FeedbackSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Feedback', FeedbackSchema);
