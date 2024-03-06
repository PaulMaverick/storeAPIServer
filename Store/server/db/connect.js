const mongoose = require('mongoose');

const connectDb = (url) => {
    mongoose.connect(url)
        .then(() => console.log('connected'))
        .catch((err) => console.log(err))
}

module.exports = connectDb