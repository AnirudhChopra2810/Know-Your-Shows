import React, { useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Modals from './modal';
import config from '../assets/config';

const Cards = ({ thumbnail, setOpen, open, id, link }) => {
	const { API_KEY } = config;
	const [clicked, setClicked] = useState(false);
	const [videoId, setVideoId] = useState('');

	return (
		<div>
			<Card
				className="cards my-4"
				onClick={() => {
					setVideoId(link.id.videoId);
					setClicked(true);
					setOpen(true);
				}}
			>
				<Image src={thumbnail} wrapped ui={false} className="image" />
				<Card.Content>
					<Card.Header>Daniel</Card.Header>
					<Card.Meta>Joined in 2016</Card.Meta>
					<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
				</Card.Content>
				{/* <Card.Content extra>
			<a>
				<Icon name="user" />
				10 Friends
			</a>
		</Card.Content> */}
			</Card>

			{clicked === true && <Modals apiKey={API_KEY} open={open} videoId={videoId} setOpen={setOpen} />}
		</div>
	);
};

export default Cards;
