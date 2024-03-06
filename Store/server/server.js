require('dotenv').config()
require('express-async-errors')

const express = require('express')
const cors = require('cors')
const connectDb = require('./db/connect')
const app = express();
const port = process.env.PORT || 3001;

const notFoundMiddleware = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler');
const productsRouter = require('./routes/products')


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello')
})

//routes
app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server listening at port:${port}`)
        })
    } catch(error) {
        console.log(error)
    }
}

start();

