const mongoose = require("mongoose");

const data = new mongoose.Schema({
    name: String,
    image_url: String,
    articles: [
      {
        name: String,
        description: String,
        price: String,
      }
    ]
  }, { collection: 'menus' }); // 👈 explicitly set
  

module.exports = mongoose.model("Menu", data);
