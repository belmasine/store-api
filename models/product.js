const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    },
    company: {
        type: String,
        enum: {
            values: ['nestle', 'danone', 'panzani', 'lipton'],
            message: '{VALUE} not provided'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    rating: {
        type: Number,
        default: 3
    },
    featured: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Product', schema);