const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
        {
            title: {
                type: String ,
                
            },
            
            description: {
                type: String
            },

            category: {
                type: String,

            },
    
            imageUrl: {
                type: String,
            },

            videoURL: {
                type: String,
            },
        },
        {timestamps:true}
    );

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
