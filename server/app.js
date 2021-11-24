const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const axios = require("axios")
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const staticPath = path.join(__dirname, "../client/build");
console.log(staticPath);
app.use(express.static(staticPath));

const config = process.env;
    let primedata = null;
    let netflixdata = null;
    let lastUpdateTime = 0;
    const minutes = 1;
    const seconds = 60;
    const updateInterval = minutes*seconds*1000;

 const checkTime = async (channelID, videoID) => {
    if(!primedata || !lastUpdateTime || (lastUpdateTime + updateInterval) <= Date.now()){
        primedata = await primeData(channelID);
        lastUpdateTime = Date.now();
        console.log("i worked");
    }
    
    if(!netflixdata || !lastUpdateTime  || (lastUpdateTime + updateInterval) <= Date.now()){
        netflixdata = await netflixData(channelID);
        lastUpdateTime = Date.now();
        console.log("i worked");
    }
    return netflixdata, primedata;
 }       


const  netflixData = async  (cachedData, channelID) => {    
    let channelid = null;
    if(channelID === config.NETFLIX){
        channelid = config.NETFLIX;
    }else if (channelID = config.AMAZON_PRIME){
        channelid = config.AMAZON_PRIME;
    }
       
    let collection;
    maxResult = 10;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=Trailer&channelId=${config.NETFLIX}&key=${config.API_KEY}`;

    const Data = await axios
	.get(url)
	.then((response) => { 
        const data = response.data.items;
        const millisec = Date.now();
        const collection = {items: data, date: millisec }
        return collection;
    })
	.catch((error) => console.log(error));
         
    return Data;   
   }
   
const  primeData = async  (channelID) => {
    
    let channelid = null;
    if(channelID === config.NETFLIX){
        channelid = config.NETFLIX;
        console.log(1);
    }else if (channelID = config.AMAZON_PRIME){
        channelid = config.AMAZON_PRIME;
        console.log(2);
    }

    maxResult = 10;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=Trailer&channelId=${config.AMAZON_PRIME}&key=${config.API_KEY}`;

    const Data = await axios
	.get(url)
	.then((response) => { 
        const data = response.data.items;
        const millisec = Date.now();
        const collection = {items: data, date: millisec }
        return collection;
    })
	.catch((error) => console.log(error));
         return Data;   
   }

app.get("/", async (req, res) => {
    try {
        console.log("i worked");
        console.log(req.headers.channelid);
        // return res.send("hello");
        checkTime(req.headers.channelid, req.headers.videoid);
        if(req.headers.channelid === config.NETFLIX){
            return res.send(netflixdata);
        }else if(req.headers.channelid === config.AMAZON_PRIME){
            return res.send(primedata);
        }
        
    } catch (error) {
        console.log(error);
    }
});     

app.listen(3000, () => console.log("Server running on the port 3000"));