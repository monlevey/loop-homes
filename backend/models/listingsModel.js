const mongoose = require('mongoose')

const listingsSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true,
    }
)

module.exports = mongoose.model('Listings', listingsSchema)