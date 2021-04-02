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
                enum: ['Farm Animals', 'Wildlife', 'Dogs', 'Cats', 'Reptiles', 'Fish', 'Birds', 'Bugs', 'Rodents'],
            },
    
            imageURL: {
                type: String,
                required: [true, 'You must submit a image URL']
            },

            user: {
                type: String ,
            },

            videoURL: {
                type: String,
            },
        },
        {timestamps:true}
    );

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
