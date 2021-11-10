const express = require("express");
const app = express();
const axios = require("axios")
const cors = require("cors");
app.use(cors());
const path = require("path");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=Trailer&channelId=UCZSNzBgFub_WWil6TOTYwAg&key=AIzaSyB_AZeQnCsy3Lm7DklpKpzoF5WKD90vTEg`;

axios
	.get(url)
	.then((response) => {
				console.log('hello there');
				let data = response.data;
				console.log(data);
			})
			.catch((error) => console.log(error));



// const staticPath = path.join(__dirname, "../client/");
// app.use(express.static(staticPath));



app.listen(3000, () => console.log("Server running on the port 3000"));