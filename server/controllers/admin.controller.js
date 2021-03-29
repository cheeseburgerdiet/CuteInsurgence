const Admin = require('../models/admin.model');

module.exports.login = login;
async function login(req, res) {
    try {
        const admin = await Admin.findOne({ name: req.body.name });
        if(admin === null) {
            return res.status(400).json({msg: "Invalid Login1"}) };
            const correctPassword =  await Admin.findOne({password : req.body.password});
                if(!correctPassword) {
                    return res.status(400).json({msg: "Invalid Login2"})
                }else {
                res.json({ 
                    msg: "success!", 
                    adminLogged:{
                        adminName: `${admin.name} `, 
                        id: `${admin._id}`
                    }})};
        }
        catch(err){ res.status(400).json({msg: "Invalid Login3"})}
};

module.exports.register = register; 
function register(req, res) {
        const admin = new Admin(req.body);
        admin.save()
            .then (()=> {
                res.json({ msg: "success!", admin: admin });
            })
            .catch(err => res.status(400).json(err));
        };


module.exports.logout = logout;
function logout(req,res)  {
    Admin.remove() 
    res.remove("admin");
        res.json({msg: "usertoken cookie cleared"});
    };

module.exports.loggedIn = loggedIn;
function loggedIn(req, res) {
    const admin = Admin.findById({_id: req.body._id})
        .then(res => res.json({msg: `${admin.name} is logged in`}))
        .catch(err => res.json(err));
};


