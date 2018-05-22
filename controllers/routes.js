// REQUIRED DEPENDENCIES
const express = require("express");
const db = require("../models");
const mongoose = require("mongoose");
var router = express.Router();
var cheerio = require("cheerio")
var axios = require("axios");

// ROUTE FOR SCRAPING THE WSJ WEBSITE
router.get("/scrape", function(req, res) {
    axios.get("http://www.wsj.com").then(function(response) {
        var $ = cheerio.load(response.data);

        $(".wsj-headline").each(function(i, element) {
            var result = {};

            result.title = $(this).children("h3").children("a").text();
            result.link = $(this).children("h3").children("a").attr("href");
            result.summary = $(this).children("p").text();

            db.Article.create(result).then(function(dbArticle) {
                console.log(dbArticle) ;
            }).catch(function(err) {
                return res.json(err);
            });
        });
    });
});

// ROUTE FOR GETTING ARTICLES 
router.get("/articles", function(req, res) {
    db.Article.find({}).then(function(dbArticle) {
        res.json(dbArticle);
    }).catch(function(err) {
        res.json(err);
    });
});

// ROUTE FOR SAVING AN ARTICLE
// router.post("/articles/save/:id", function(req, res) {
//     Article.findOneAndUpdate({ _id: req.params.id }, { "saved": true}).exec(function(err, doc) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(doc);
//       }
//     });
// });

// ROUTE FOR DELETING AN ARTICLE
// router.post("/articles/delete/:id", function(req, res) {
//     Article.findOneAndUpdate({ _id: req.params.id }, {"saved": false, "notes": []}).exec(function(err, doc) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(doc);
//       }
//     });
// });

// ROUTE FOR GRABBING A SPECIFIC ARTICLE
router.get("/articles/:id", function(req, res) {
    db.Article.findOne({ _id: req.params.id }).populate("note").then(function(dbArticle) {
        res.json(dbArticle);
    }).catch(function(err) {
        res.json(err);
    });
});

// ROUTE FOR SAVING/ UPDATING AN ARTICLES NOTE
router.post("/articles/:id", function(req, res) {
    db.Note.create(req.body).then(function(dbNote) {
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id}, { new: true});
    })
    .then(function(dbArtcile) {
        res.json(dbArticle)
    }).catch(function(err) {
        res.json(err);
    });
});

module.exports = router;

    
    



