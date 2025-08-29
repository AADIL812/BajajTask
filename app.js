const express = require('express');
const { appRoute } = require('./router/app.router');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/bfhl', appRoute);

app.get('/', (req, res) => {
    return res.status(200).json({
        "message": "Hi there"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
