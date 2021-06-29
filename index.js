require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 8000;

const url =`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@fyle.jy2ou.mongodb.net/Fyle?retryWrites=true&w=majority`;

const router = require("./routes/index");

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("Fyle Full Stack Development Challenge");
})

app.use("/api",router);

app.listen(port, () => {
    console.log(`app is running at ${port}`);
});