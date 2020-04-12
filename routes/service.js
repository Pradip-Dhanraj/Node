var express = require('express');
var router = express.Router();
var petmodel = require('../models/petcategory');
var DataBaseService = require('../helper/database');
var models = require('../models/pictureCollectionModel');
var user = require('../models/mdb_user');
var mdb_memories = require('../models/mdb_memories');
var mongoose = require('mongoose');

const profilePicture = 'https://scontent.fbom2-1.fna.fbcdn.net/v/t1.0-9/51874775_2429675530390452_7977053882826096640_n.jpg?_nc_cat=101&_nc_ohc=LtyoKJqxp7oAQlK_AYb5tIizVvPPXI3fgjJvUHAQARjcEqllI8aNlWs4Q&_nc_ht=scontent.fbom2-1.fna&oh=59fd84e30d321f4cfbcc1c8d9229b917&oe=5E7B6633';

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
  res.send(DataBaseService.GetDataBase());
});

router.get('/profilepicture', function (req, res, next) {
  res.send(profilePicture);
});

// router.get('/picturecollection', function (req, res, next) {
//   res.send(datalist);
// });

router.get('/users', function (req, res, next) {
  user.find()
    .exec()
    .then(docs => {
      console.log(docs);
      if (docs.length > 0) {
        res.status(200).json(docs);
      } else {
        res.status(404).json({
          message: 'No user found'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get('/memories', function (req, res, next) {
  mdb_memories.find()
    .exec()
    .then(docs => {
      console.log(docs);
      if (docs.length > 0) {
        res.status(200).json(docs);
      } else {
        res.status(404).json({
          message: 'No memories found'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post('/addmemories', function (req, res) {

  const memoriesobj = new mdb_memories({
    _id: new mongoose.Types.ObjectId(),
    banner: req.body.banner,
    pictures: req.body.pictures,
    year: req.body.year,
  });

  memoriesobj.save();
  res.send(memoriesobj);

//   {
//     "pictures": [
//         "picture 1",
//         "picture 2"
//     ],
//     "_id": "5e36c5006416c668b3222ebe",
//     "banner": "added from service",
//     "year": "2020"
// }

});

module.exports = router;
