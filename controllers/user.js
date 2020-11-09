const User = require('../models/user');


exports.signup = (req, res) =>{
    console.log('req.body', req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err 
            })
        }
        
        //if we don't want to show the credentials like salt and hashedPassword
        user.salt = undefined;
        user.hashed_password = undefined;
        //
        res.json({
            user
        })
    })
};