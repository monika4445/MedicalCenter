const User = require("../models/users")
const bcrypt = require("bcrypt");
const AppError = require("../errors/app_error");
const appErrorHandler = require("../errors/app_error_handler");


function login(req, res, next) {
    if (!req.body) {
        const err = AppError.internalError("Error: Body doesn't exist.");
        return appErrorHandler(err, req, res, next);
    }
    return res.render("login", {layout: "./layouts/main-layout"});
};

function logout(req, res){
    delete req.session.user;

    return res.redirect("/");
};


async function loginPost(req, res) {
    const email = req.body.email || "";
    const password = req.body.password || "";

    if(!email || !password) {
        return res.render("login", {
            errors: [
                "All Fields Required."
            ],
            layout : "./layouts/auth-layouts"
        },)
    };
    const user = await User.getByEmail(email);
    if(!user) {
        return res.render("login", {
            errors: [
                "Invalid email"
            ],
            layout : "./layouts/auth-layouts"
        })
    };
    if(!(await bcrypt.compare(password, user.password))) {
        return res.render("login", {
            errors: [
                "Invalid password"
            ],
            layout : "./layouts/auth-layouts"
        })
    };
    req.session.user = user;

    return res.redirect("/app/patients");

};

function register(req, res) {
    if (!req.body) {
        const err = AppError.internalError("Error: Body doesn't exist.");
        return appErrorHandler(err, req, res, next);
    }

    return res.render("register", { layout : "./layouts/main-layout"});
};

async function registerPost(req, res) {
    const email = req.body.email || "";
    const name = req.body.name || "";
    const age = Number(req.body.age || 0);
    const surname = req.body.surname || "";
    const password = req.body.password || "";


    const user = await User.getByEmail(email);
    if(user) {
        return res.render("register", {
            errors: [
                "User of this email already  exists"
            ],
            layout : "./layouts/auth-layouts",
        })
    };

    const newUser = new User(age, name, surname, email, password);
    await newUser.save();
    
    
    req.session.user = newUser;
    return res.redirect("/app/patients");

};
module.exports = {
    login,
    loginPost,
    register,
    registerPost,
    logout
};

