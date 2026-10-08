const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://user_4559aydup:p4559aydup@db01.dbhost.dev:5050/db_4559aydup")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });
const schema=new mongoose.Schema({
    Name:String,
    Institution:String,
    Email:String,
    Conference:String
})
const Student = mongoose.model("Student",schema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/students', async (req, res) => {

    const student = new Student({
        Name: req.body.Name,
        Institution:req.body.In,
        Email:req.body.mail,
    Conference:req.body.cof
    });

    await student.save();

    res.send("Student inserted successfully");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
