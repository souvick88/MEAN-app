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
    post.save();
    res.status(201).json(
        {
            message: "posts addded successfully"
        }
    );
})
app.get('/api/posts', (req, res, next) => {
    // res.send('Hello from Express');
    Post.find().then(documents => {
        // console.log(documents);
        res.status(200).json(
            {
                message: "posts fetched successfully",
                posts: documents
            }
        );
    });

});

app.delete('/api/posts/:id', (req, res, next) => {
    // console.log(req.params.id);
    Post.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: 'post deleted' });

    })
});

module.exports = app;