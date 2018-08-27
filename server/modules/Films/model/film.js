import mongoose from 'mongoose';

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
    comments: [{
        userId: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        userAvatar: {
            type: String,
        },
        message: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            required: true
        }
    }],
    rating: Number
}, {
    timestamps: true
});




export default mongoose.model('Film', FilmsSchema);