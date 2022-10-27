const AppError = require("../errors/app_error");
const appErrorHandler = require("../errors/app_error_handler");

async function contactGet(req, res, next) {
    if (!req.body) {
        const err = AppError.internalError("Error: Body doesn't exist.");
        return appErrorHandler(err, req, res, next);
    }

    return res.render("contactus");
};


async function contactPost(req, res) {
   
    const name = req.body.name || "";
    const number = Number(req.body.number || 0);
    const email = req.body.email || "";
    const doctorName = req.body.doctor || "";
    const date = String(req.body.date || "");

    const NewBook = new Book(name, number, email, doctorName, date);
    await NewBook.save();
    
    return res.redirect("/app/doctors");
   
};



module.exports = {
    contactGet,
    contactPost
};

