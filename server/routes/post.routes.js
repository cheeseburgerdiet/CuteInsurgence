const PostController = require("../controllers/post.controller");

module.exports = function(app){
    app.get("/api/posts", PostController.showAllPosts);
    app.post("/api/posts", PostController.createPost);
    app.get("/api/posts/:id", PostController.showOnePost);
    app.get("/api/posts/category/:category", PostController.showAllByCategory);
    app.put("/api/posts/:id", PostController.updatePost);
    app.delete("/api/posts/:id", PostController.deletePost);  
};
