const User = require("../models/users");
const Book = require("../models/books");
const path = require("path");
const bcrypt = require("bcrypt");
const AppError = require("../errors/app_error");
const appErrorHandler = require("../errors/app_error_handler");

async function getDoctors(req, res, next) {
    if (!req.body) {
        const err = AppError.internalError("Error: Body doesn't exist.");
        return appErrorHandler(err, req, res, next);
    }

    const doctors = await User.getAll();
    return res.render("doctors", { 
        doctors: [`${JSON.stringify(doctors)}`],
    });
};

async function getPatients(req, res, next) {
    if (!req.body) {
        const err = AppError.internalError("Error: Body doesn't exist.");
        return appErrorHandler(err, req, res, next);
    }

    const books = await Book.getAll();
    if(!books){
        return res.render("patients", {
        data: `Doctor ${req.session.user.name}, your registered patients list is empty \n`,
        patient: ["There are no registered patients yet."],
        layout : "../views/layouts/main"
        })
    }
        return res.render("patients", {
        data: `Doctor ${req.session.user.name}, here is your registered patients list \n`,
        patient: [books],
        layout : "../views/layouts/main"
        });
};
async function bookAppoint(req, res, next) {
    if (!req.body) {
        const err = AppError.internalError("Error: Body doesn't exist.");
        return appErrorHandler(err, req, res, next);
    }

    return res.render("book");
};

async function bookAppointPost(req, res, next) {
   
    const name = req.body.name || "";
    const number = Number(req.body.number || 0);
    const email = req.body.email || "";
    const doctorName = req.body.doctor || "";
    const date = String(req.body.date || "");


    const book = await Book.getByDate(date);
    if(book) {
        return res.render("book", {
            errors: [
                "Book at this date and time already exists and don't available. Please check another time."
            ],
        })
    };

    const NewBook = new Book(name, number, email, doctorName, date);
    await NewBook.save();
    
    return res.redirect("/app/doctors");
   
};



module.exports = {
   getDoctors,
   getPatients,
   bookAppoint,
   bookAppointPost,
};

