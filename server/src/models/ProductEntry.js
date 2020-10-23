const mongoose = require('mongoose');

const { Schema } = mongoose;

const productEntryScheema = new Schema ({
    product: {
        type: String
    },
    price: {
        type: Number
    }
});

const ProductEntry = mongoose.model('ProductEntry', productEntryScheema);

module.exports = ProductEntry;