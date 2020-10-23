const express = require('express');

const app = express();

const port = process.env.PORT || 5500

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})