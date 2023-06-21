const mongoose = require('mongoose');

const UserShema = new mongoose.Schema(
    {
        name: {
            type: String , 
            required: true ,
            min:2 ,
            max:100 , 
        } , 
        email: {
            type: String , 
            required: true , 
            max: 50 , 
            unique: true 
        } , 
        password: {
            type: String , 
            required: true , 
            min: 5 ,

        } , 
        profile:{
        type:String,

        },

        phoneNumber: String , 
        role : {
            type: String , 
            enum: ["user" , "admin" ,"superadmin"] , 
            default:"user"
        } ,
        profileImage: {
            type: String,
            default: 'default_profile.jpg', // Image de profil par défaut
          },
          coverImage: {
            type: String,
            default: 'default_cover.jpg', // Image de couverture par défaut
          },
     } , 
        {timestamps: true}
    
) ; 

const User = mongoose.model("User" , UserShema) ; 
module.exports = User;
