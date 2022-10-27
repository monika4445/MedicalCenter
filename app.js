const express = require("express");
const path = require("path");
const authRouter = require("./routes/auth_router");
const appRouter = require("./routes/app_router");
const mainRouter = require("./routes/main_router");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const expressLayouts = require("express-ejs-layouts");
//const appErrorHandler = require("./errors/app_error_handler");

const app = express();


app.set("view engine", "ejs");
app.set("layout", "./layouts/main");
app.set("views", path.resolve("views"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve("public")));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    secret: "secretkey",
    saveUninitialized:true,
    resave: false 
}));
app.use(expressLayouts);

app.use("/", mainRouter);
app.use("/auth", authRouter);
app.use("/app", appRouter);


app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve("public/home.html"));
})

app.use((req, res)=>{
    res.status(404).sendFile(path.resolve("public/404.html"));
})


//app.use(appErrorHandler);
app.listen(process.env.PORT || 6001);
