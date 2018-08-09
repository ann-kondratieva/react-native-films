import mongoose from 'mongoose';
import countAverage from '../services/countAverage';

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
        message: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            required: true
        }
    }]
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

FilmsSchema
    .virtual('rating')
    .get(function () {
        let rating = countAverage(this.usersMarks);
        return rating;
    });



export default mongoose.model('Film', FilmsSchema);