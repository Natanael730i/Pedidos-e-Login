'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        tupe: String,
        required: true
    }],
    image: {
        type: Sting,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Product', schema);