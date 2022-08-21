const fs = require("fs/promises");
const path = require("path");

function AuthMiddleware (req, res, next) {
    if(req.session.user){
        return next();
     }
    return res.redirect("/auth/login")
}



class Model {
    static async readFile(fileName) {
        const modelsBuffer = await fs.readFile(path.join(__dirname, `./dbs/${fileName}`));
        const modelsJson = modelsBuffer.toString();

        if (!modelsJson) {
            return;
        }

        return JSON.parse(modelsJson);
    }

    static async writeFile(fileName, obj) {
        if (typeof fileName === "undefined") {
            return;
        }

        const objects = await this.readFile(fileName);
        obj.id = objects.length + 1;
        objects.push(obj);

        await fs.writeFile(path.join(__dirname, `./dbs/${fileName}`), JSON.stringify(objects));
    }
}


module.exports = {
    AuthMiddleware,
    Model
};

