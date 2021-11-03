import React, { useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Modals from './modal';
import config from '../assets/config';

const Cards = ({ thumbnail, setOpen, open, link, title, description }) => {
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
				style={{ overflow: 'auto', maxHeight: '30em' }}
			>
				<Image src={thumbnail} wrapped ui={false} className="image" />
				<Card.Content className="content">
					<Card.Header>{title}</Card.Header>
					<Card.Meta>Joined in 2016</Card.Meta>
					<Card.Description>{description}</Card.Description>
				</Card.Content>
			</Card>

			{clicked === true && <Modals apiKey={API_KEY} open={open} videoId={videoId} setOpen={setOpen} />}
		</div>
	);
};

export default Cards;
