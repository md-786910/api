const mongoose = require('mongoose')

const database = process.env.DATABASE_URI

mongoose.connect(database, {

    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log('connected')
}).catch(err => console.log('error connecting' + err.message))