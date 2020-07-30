const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.post("/api/posts", (req, res, next) => {
    const post = req.body;
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