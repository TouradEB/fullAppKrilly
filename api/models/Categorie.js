const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Types.ObjectId, ref:"User",
  
  
  },
  name: { type: String, required: true },
});

const CategorieModel = mongoose.model('Categorie', categorieSchema);
module.exports = CategorieModel;