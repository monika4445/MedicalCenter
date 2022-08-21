const fs = require("fs/promises");
const path = require("path");
const bcrypt = require("bcrypt");

const {Model} = require("../utils");

class User extends Model{
    constructor (age, name, surname, email, password) {
        super();
        this.age = age;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }

    static async getByEmail(email) {
        const usersBuffer = await fs.readFile(path.join(__dirname, "../dbs/users.json"));
        const usersJson = usersBuffer.toString();
        if (!usersJson) {
            return;
        }
        const users = JSON.parse(usersJson);
        return users.find((user) => user.email === email)
    };

    static async getAll() {
        return await Model.readFile('../dbs/users.json');
    }

    async save() {
        const usersBuffer = await fs.readFile(path.join(__dirname, "../dbs/users.json")); 
        const usersJson = usersBuffer.toString();
        let users =  !usersJson ?  [] : JSON.parse(usersJson);
        this.id = users.length + 1;

        const cryptPassword = await bcrypt.hash(this.password, 10);
        this.password = cryptPassword;
       
        users.push(this); 
       
        
        await fs.writeFile(path.join(__dirname, "../dbs/users.json"), JSON.stringify(users));
    };
}

module.exports = User;

