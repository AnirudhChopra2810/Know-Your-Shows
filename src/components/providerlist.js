import { React, useEffect, useState } from 'react';
import axios from 'axios';
import config from '../assets/config';
import netflixImage from '../assets/netflix2.png';
import primeImage from '../assets/prime2.svg.png';
import Cards from './card';
import Modals from './modal';

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
	const [open, setOpen] = useState(false);

	useEffect(() => {
		console.log('helloworld');
		const maxResult = 10;
		const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=Trailer&channelId=${channelId}&key=${apiKey}`;

		axios
			.get(url)
			.then((response) => {
				console.log('hello there');
				let data = response.data;
				const link = data.items;
				setContentList(link);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<div>
				<img src={getImgByChannel(channelId)} className="title"></img>
			</div>
			<div className="Container">
				<div className="display">
					{contentList.map((link, id) => {
						console.log(link);
						//link means the data at array[id]
						return (
							<div className="container">
								<div className="display">
									<Cards
										thumbnail={link.snippet.thumbnails.high.url}
										title={link.snippet.title}
										description={link.snippet.description}
										id={id}
										link={link}
										setOpen={setOpen}
										open={open}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProviderList;
