const express = require("express");
const app = express();
const axios = require("axios")
const cors = require("cors");
app.use(cors());
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});

const bodyParser = require("body-parser");
const { json } = require("body-parser");
app.use(bodyParser.json());

// const staticPath = path.join(__dirname, "../client/build");
// app.use(express.static(staticPath));

const config = process.env;
console.log(config.API_KEY);
    let cachedData = null;
    let lastUpdateTime = 0;
    const minutes = 1;
    const seconds = 60;
    const updateInterval = minutes*seconds*1000;

 const checkTime = async () => {
    if(!cachedData || !lastUpdateTime || (lastUpdateTime + updateInterval) < Date.now()){
        cachedData = await getData(cachedData);
        lastUpdateTime = Date.now();
        console.log("i worked");
    }
    return cachedData;
 }       


const  getData = async  (cachedData) => {
    
    let collection;
    maxResult = 20;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=Trailer&channelId=${config.NETFLIX}&key=${config.API_KEY}`;

    const Data = await axios
	.get(url)
	.then((response) => { 
        const data = response.data.items;
        const millisec = Date.now();
        const collection = {items: data, date: millisec }
        return collection;
    })
    // .then((data) => {
    //     cachedData = data.data;
    //     return cachedData;
    // })
	.catch((error) => console.log(error));
         return Data;   
   }


app.get("/", async (req, res) => {
    try {
        checkTime();
        console.log(lastUpdateTime);
        // console.log(cachedData);
    } catch (error) {
        console.log(error);
    }
});     

app.listen(3000, () => console.log("Server running on the port 3000"));