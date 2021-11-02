import { React, useEffect, useState } from 'react';
//import axios from 'axios';
// import './styles.css';
import config from '../assets/config';
import netflixImage from '../assets/netflix2.png';
import primeImage from '../assets/prime2.svg.png';
// import Cards from './Card';

const { YT_CHANNEL_IDS } = config;

function getImgByChannel(channelId) {
	if (channelId == YT_CHANNEL_IDS.NETFLIX) {
		return netflixImage;
	} else if (channelId == YT_CHANNEL_IDS.AMAZON_PRIME) {
		return primeImage;
	}
	return null;
}

const ProviderList = ({ apiKey, channelId }) => {
	const [contentList, setContentList] = useState([]);
	const [isMouseHovering, setMouseHovering] = useState(0);
	const [thumbNailList, setThumbnailList] = useState([]);
	const [Description, setDescription] = useState('');

	// useEffect(() => {
	// 	const maxResult = 10;
	// 	const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=Trailer&channelId=${channelId}&key=${apiKey}`;
	// 	axios
	// 		.get(url)
	// 		.then((response) => {
	// 			let data = response.data;
	// 			const link = data.items;
	// 			setContentList(link);
	// 		})
	// 		.catch((error) => console.log(error));
	// }, []);

	// const handleMouseEnter = (id, videoId) => {
	// 	setMouseHovering(id);
	// };

	return (
		<div>
			<div>
				<img src={getImgByChannel(channelId)} className="title"></img>
			</div>
			{/* <div className="Container">
				<div className="display">
					{contentList.map((link, id) => {
						//link means the data at array[id]
						return (
							<div>
								<div>
									<img
										key={id}
										height="150px"
										className="image mx-2"
										src={link.snippet.thumbnails.high.url}
										onClick={() => {
											console.log(link.id.videoId);
											handleMouseEnter(
												id,
												link.id.videoId
											);
										}}
									></img>
								</div>

								{isMouseHovering === id && (
									<div>
										<Cards
											description={Description}
											videoId={link.id.videoId}
											id={id}
										/>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div> */}
		</div>
	);
};

export default ProviderList;
