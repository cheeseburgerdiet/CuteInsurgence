const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.login = login;
async function login(req, res) {
    try {
        const admin = await Admin.findOne({ name: req.body.name });
        if(admin === null) {
            return res.status(400).json({msg: "Invalid Login1"}) };
            const correctPassword =  await bcrypt.compare(req.body.password, admin.password);
                if(!correctPassword) {
                    return res.status(400).json({msg: "Invalid Login2"})
                }else {
            const adminToken = jwt.sign({
                _id: admin._id
            }, process.env.JWT_SECRET);
            res
                .cookie("adminToken", adminToken, {
                    httpOnly: true
                })
                .json({ 
                    msg: "success!", 
                    adminLogged:{
                        adminName: `${admin.name} `, 
                        id: `${admin._id}`
                    }
                });
        }}
        catch(err){ res.status(400).json({msg: "Invalid Login3"})}
};

// module.exports.login = login;
// async function login(req, res) {
//     try {
//         const admin = await Admin.findOne({ name: req.body.name });
//         if(admin === null) {
//             return res.status(400).json({msg: "Invalid Login1"}) };
//             const correctPassword =  await Admin.findOne({password : req.body.password});
//                 if(!correctPassword) {
//                     return res.status(400).json({msg: "Invalid Login2"})
//                 }else {
//                 res.json({ 
//                     msg: "success!", 
//                     adminLogged:{
//                         adminName: `${admin.name} `, 
//                         id: `${admin._id}`
//                     }})};
//         }
//         catch(err){ res.status(400).json({msg: "Invalid Login3"})}
// };

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
        res.clearCookie("adminToken");
        res.json({msg: "adminToken cookie cleared"});
    };

module.exports.loggedIn = loggedIn;
function loggedIn(req, res) {
    const decodedJWT = jwt.decode(req.cookies.adminToken, { complete: true});
    Admin.findById(decodedJWT.payload._id)
    // User.findById({_id: req.params.id})
        .then(admin=> res.json({msg: `${admin.name} is logged in`}))
        .catch(err => res.json(err));
};


