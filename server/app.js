const express = require("express");
const app = express();
const axios = require("axios")
const cors = require("cors");
app.use(cors());
const path = require("path");
const fs = require("fs");
const { create } = require("domain");
let prevReq = 0;

const bodyParser = require("body-parser");
const { json } = require("body-parser");
app.use(bodyParser.json());

const staticPath = path.join(__dirname, "../client/build");
app.use(express.static(__dirname));



function checkTime (req, res, next){
    let date = new Date();
    let currentMinutes = date.getMinutes();
    console.log(currentMinutes);
    
    
    fs.readFile('apiData.txt', 'utf-8',  (err, data) => {
        let _data = JSON.parse(data);
        let minutes = _data.hours;
        if(currentMinutes >= minutes){
          console.log("hello"); 
          next();
        }else res.send("wait");

    })
}

function getData (){

    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=Trailer&channelId=UCZSNzBgFub_WWil6TOTYwAg&key=AIzaSyB_AZeQnCsy3Lm7DklpKpzoF5WKD90vTEg`;

    axios
	.get(url)
	.then((response) => {
				console.log('hello there');
                console.log(response);
				let data = response.data.items;
                // console.log(data);
                const date = new Date();
                const hours = date.getMinutes();

                const collection = {link: data, hours: hours};
                const link = JSON.stringify(collection);
                fs.writeFile('apiData.txt', link, function(error){
                   return console.log(error);
                })
				
			})
			.catch((error) => console.log(error));
        }


// app.use(checkTime);

app.get("/", (req, res) => {
    try {
        getData();
        console.log("i worked");
        fs.readFile('apiData.txt', 'utf-8', (err, data) => {
            // let _data = JSON.parse(data);
            console.log(data);
            return res.send(data);
            // return res.send("hello")
        } )
    } catch (error) {
        console.log(error);
    }
});     

app.listen(3000, () => console.log("Server running on the port 3000"));