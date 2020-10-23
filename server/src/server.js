const express = require('express');
const helmet = require('helmet')
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const productsLog = require('./api/products');


const app = express();


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());

app.use('/', productsLog);

const port = process.env.PORT || 5500

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})