const express = require('express');
const helmet = require('helmet')
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const app = express();

app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());


const items = []

app.get('/', (req, res) => {
    res.json(items);
})

app.post('/products', (req, res) => {
    const { product, price } = req.body

    res.status(200).json({
        message: 'Item created',
    })

    items.push({
        product,
        price
    })
})

const port = process.env.PORT || 5500

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})