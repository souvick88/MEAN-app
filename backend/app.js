const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors')

const Post = require('./models/post');
const app = express();

mongoose.connect("mongodb+srv://newUser88:zcyIHvEfqdwt88t8@cluster0.nsap4.mongodb.net/myMEAN-app?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('connected to mongoDB');
    })
    .catch(() => {
        console.log("connection failed");
    })

app.use(bodyParser.json());

app.use(cors());

app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    console.log(post);
    res.status(201).json(
        {
            message: "posts addded successfully"
        }
    );
})
app.use('/api/posts', (req, res, next) => {
    // res.send('Hello from Express');
    const posts = [
        {
            id: "3124edfs",
            title: "1st post",
            content: "This is coming from server node BE"
        },
        {
            id: "werwerfv2323",
            title: "2nd post",
            content: "This is coming from server node BE"
        },
        {
            id: "3748t6geyuds",
            title: "3rd post",
            content: "This is coming from server node BE"
        }
    ];
    res.status(200).json(
        {
            message: "posts fetched successfully",
            posts: posts
        }
    );
});

module.exports = app;