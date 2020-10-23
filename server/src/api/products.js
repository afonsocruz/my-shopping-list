const { Router } = require('express');

const ProductEntry = require('../models/ProductEntry');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const entries = await ProductEntry.find();
        res.json(entries);
    } catch (error) {
        res.status(400).json({
            message: 'error on listing products'
        })
    }
})

router.post('/products', async (req, res) => {
    try {
        const productEntry = new ProductEntry(req.body);
        const createdProduct = await productEntry.save();
        res.json(createdProduct)
    } catch (error) {
        res.status(400).json({
            message: 'cannot create product'
        })
    }
})

module.exports = router;