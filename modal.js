const mongoose = require('mongoose')

const data = mongoose.Schema({
    
    id : String,
    name : String,
    image_url: String,
    articles: [
        {name: String,
        description: String,
        price: String}
    ]

})

module.exports = mongoose.model('Menu',data)