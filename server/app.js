const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const axios = require("axios")
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const staticPath = path.join(__dirname, "../client/build");
app.use(express.static(__dirname));

const config = process.env;
    let primedata = null;
    let netflixdata = null;
    let lastUpdateTime = 0;
    // let description = null;
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
        // description = await _description(videoID);
        lastUpdateTime = Date.now();
        console.log("i worked");
    }

//     description = await _description(videoID);
//    // console.log(description);
//     console.log(videoID);
    return netflixdata, primedata;
 }       

// const _description = async (videoID) => {
//     const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=${config.API_KEY}`;
//     const Data = await axios
//     .get(url)
//     .then((response) => {
//         //console.log(response);
//         return response.data;
        
//     })
//     .catch((error) => console.log(error));

//     return Data;
// }

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
        checkTime(req.headers.channelid, req.headers.videoid);
        if(req.headers.channelid === config.NETFLIX){
            return res.send(netflixdata);
        }else if(req.headers.channelid === config.AMAZON_PRIME){
            return res.send(primedata);
        }
        // console.log(description);
        // return res.send(description);

    } catch (error) {
        console.log(error);
    }
});     

app.listen(3000, () => console.log("Server running on the port 3000"));