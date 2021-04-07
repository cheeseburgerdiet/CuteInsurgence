const PostController = require("../controllers/post.controller");
const {authenticate} = require('../config/jwt.config');

module.exports = function(app){
    app.get("/api/posts", PostController.showAllPosts);
    app.post("/api/posts", authenticate, PostController.createPost);
    app.get("/api/posts/:id", PostController.showOnePost);
    app.get("/api/posts/category/:category", PostController.showAllByCategory);
    app.put("/api/posts/:id", authenticate,  PostController.updatePost);
    app.delete("/api/posts/:id", authenticate, PostController.deletePost);  
};
