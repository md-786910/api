const mongoose = require('mongoose')

const apiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique: [true, { throw new Error('') }]
    },
    description: {
        type: String,
        required: false
    },
    userId: {
        type: Number,
        defaultValue: 1,
        required: true
    },
    image: {
        type: String,
    },
    date: {
        type: Date,
        defaultValue: new Date(Date.now())
    }
})

const apiModel = new mongoose.model('apiModel', apiSchema)

module.exports = apiModel