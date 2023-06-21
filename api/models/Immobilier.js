const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImmobilierSchema = new Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorie', autopopulate: true },

    titre: String,
    adress: String,
    photos: [String],
    description: String,
    perks: [String],
    supInfo: String,
    checkIn: Number,
    checkOut: Number,
    nomberchamber: Number,
    price: Number,
    rented: {
        type: Boolean,
        default: false
    },
    status:{
        type:String,
        enum:["accepter","refuser"],
        default :"refuser"
    },
    
    
  },
  {timestamps:true}
  );
  
  const Immobilier = mongoose.model('Immobilier', ImmobilierSchema);
  module.exports = Immobilier;