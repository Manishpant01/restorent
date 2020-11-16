const model = require('../model/model');
const model2 = require('../model/reservation');
const multer = require('multer');


module.exports = {
    signup,
    adminlogin,
    userlogin,
    reservation,
    getCustomer,
    getReservation
}


function signup(req, res) {
    let f_name = req.body.f_name;
    let l_name = req.body.l_name;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    console.log(f_name);
    console.log(l_name);
    console.log(username);
    console.log(">>>>>>>:", email);
    console.log(password);
    let data = new model({ 'f_name': f_name, 'l_name': l_name, 'email': email, 'username': username, 'password': password, 'role': 'user' });
    data.save().then(result => {
        console.log(result);
        res.status(200).json('You have been Registered')
    }).catch(err => {
        console.log(err);
    })

}


function adminlogin(req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log(email);
    console.log(password);
    model.findOne({ 'email': email }).select('+password').then(result => {
        let role = result.role
        console.log(role);
        if (result == null) {
            res.status(400).json('Incorrect Email');
        } else if (role == 'admin') {
            result.comparePassword(password, (err, isMatch) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Password:', isMatch);
                    if (isMatch == false) {
                        res.status(400).json('Wrong Password');
                    } else {
                        res.status(200).json('Login Successful')
                        console.log(result);
                    }
                }

            })
        } else {
            res.status(400).json("You are not admin");
        }
    }).catch(err => {
        console.log(err);
    })
}


function userlogin(req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log(email);
    console.log(password);
    model.findOne({ 'email': email }).select('+password').then(result => {
        if (result == null) {
            res.status(400).json('Incorrect Email');
        } else {
            result.comparePassword(password, (err, isMatch) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Password:', isMatch);
                    if (isMatch == false) {
                        res.status(400).json('Wrong Password');
                    } else {
                        res.status(200).json('Login Successful')
                        console.log(result);
                    }
                }

            })
        }
    }).catch(err => {
        console.log(err);
    })
}

function reservation(req, res) {
    let email = req.body.email;
    let PhoneNo = req.body.PhoneNo;
    let numbofguests = req.body.numbofguests;
    let date = req.body.date;
    let time = req.body.time;
    model.findOne({ 'email': email }).then(result => {
        if (result == null) {
            res.status(400).json('User Not Found Please Login');
        } else {
            let id = result
            console.log(id);
            let book = new model2({ 'PhoneNo': PhoneNo, 'numbofguests': numbofguests, 'date': date, 'time': time, 'bookby': id });
            book.save().then(result => {
                console.log(result);
                res.status(200).json('Table Booked')
            }).catch(err => {
                console.log(err);
                res.status(500).json('Internal Error');
            })
        }
    })
}

function getCustomer(req,res){
    model.find({}).then(result=>{
        console.log(result);
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err);
        res.status(400).json('Internal Error')
    })
}

function getReservation(req,res){
    model2.find({}).then(result=>{
        console.log(result);
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err);
        res.status(400).json('Internal Error')
    })
}



  