const AdminController = require("../controllers/admin.controller");

module.exports = (app) => {
    app.post('/api/admin/register',  AdminController.register);
    app.post('/api/admin/login', AdminController.login);
    app.post('/api/admin/logout', AdminController.logout);
    app.get('/api/admin/home', AdminController.loggedIn);

};
