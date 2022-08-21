const fs = require("fs/promises");
const path = require("path");

const {Model} = require("../utils");

class Book extends Model{
    constructor (name, number, email, doctorName, date) {
        super();
        this.name = name;
        this.number = number;
        this.email = email;
        this.doctorName = doctorName;
        this.date = date;
    }

    static async getByEmail(email) {
        const booksBuffer = await fs.readFile(path.join(__dirname, "../dbs/books.json"));
        const booksJson = booksBuffer.toString();
        if (!booksJson) {
            return;
        }
        const books = JSON.parse(booksJson);
        return books.find((book) => book.email === email);
    };

    static async getByDate(date) {
        const booksBuffer = await fs.readFile(path.join(__dirname, "../dbs/books.json"));
        const booksJson = booksBuffer.toString();
        if (!booksJson) {
            return;
        }
        const books = JSON.parse(booksJson);
        return books.find((book) => book.date === date);
    };

    static async getAll() {
        return await fs.readFile(path.join(__dirname, "../dbs/books.json"));
    }


    async save() {
        const booksBuffer = await fs.readFile(path.join(__dirname, "../dbs/books.json"));
        const booksJson = booksBuffer.toString();
        let books =  !booksJson ?  [] : JSON.parse(booksJson);
        this.id = books.length + 1;

        books.push(this); 
       
        
        await fs.writeFile(path.join(__dirname, "../dbs/books.json"), JSON.stringify(books));
    };
}

module.exports = Book;

