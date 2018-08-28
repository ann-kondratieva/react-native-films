import mongoose from 'mongoose';

import CommentSchema from './comment';

const Schema = mongoose.Schema;

const FilmsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: String,
    usersMarks: [{
        id: {
            type: String,
            required: true
        },
        mark: {
            type: Number,
            required: true
        }
    }],
    images: Array,
    comments: [CommentSchema],
    rating: Number
}, {
    timestamps: true
});






export default mongoose.model('Film', FilmsSchema);