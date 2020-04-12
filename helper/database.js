var express = require('express');
var router = express.Router();
var petmodel = require('../models/petcategory');

class DatabaseService {
    GetDataBase() {
        let data = [
            new petmodel("Cat", 2, "Mumbai"),
            new petmodel("Dog", 2, "Pune"),
            new petmodel("Dog", 3, "Nashik"),
            new petmodel("Rabbit", 4, "Jalna"),];
        return data;
    }
}

module.exports = new DatabaseService();







