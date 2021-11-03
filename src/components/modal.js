import React, { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import config from '../assets/config';
import axios from 'axios';

const Modals = (props) => {
	const [open, setOpen] = React.useState(props.open);
	const [description, setDescription] = useState('');

	console.log(props.videoId);

	// const getDescription = () => {
	// 	const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${props.videoId}&key=${props.apikey}`;
	// 	axios
	// 		.get(url)
	// 		.then((response) => {
	// 			setDescription(response.data.items[0].snippet.description);
	// 		})
	// 		.catch((error) => console.log(error));
	// };

	return (
		<Modal
			key={props.id}
			style={{
				position: 'absolute',
				top: '100px',
				left: '400px'
			}}
			basic
			onClose={() => props.setOpen(false)}
			onOpen={() => props.setOpen(true)}
			open={props.open}
			size="small"
		>
			<Header icon>
				<Icon name="archive" />
				Description
			</Header>

			<iframe
				className="frame mx-2"
				width="420"
				height="220"
				frameBorder="0"
				style={{ position: 'relative', left: '150px' }}
				src={`https://www.youtube.com/embed/${props.videoId}`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<Modal.Content>{description}</Modal.Content>
			<Modal.Actions>
				<Button basic color="red" inverted onClick={() => props.setOpen(false)}>
					<Icon name="remove" /> close
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default Modals;
