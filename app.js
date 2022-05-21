console.log('Store API')
require('dotenv').config();
require('express-async-errors');

const express = require('express');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const connectDB = require('./db/connect')
const app = express();
const productRouter = require('./routes/products')
// middleware
app.use(express.json());
// routes
app.get('/',(req, res) => {
    res.send('<h1>Hello ! </h1><a href="/api/products">store products</a>')
})


app.use('/api/products', productRouter)
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.CREDENTIALS);
        app.listen(port, console.log(`server listening on port ${port}`));
        
    } catch (error) {
        console.log(error)
    }
}

start();
