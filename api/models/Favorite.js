
const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
place: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Immobilier' },
user: { type: mongoose.Schema.Types.ObjectId, required: true },
});



const FavoritegModel = mongoose.model('Favorite',FavoriteSchema);
module.exports = FavoritegModel;