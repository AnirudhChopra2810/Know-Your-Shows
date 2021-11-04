import React, { useEffect, useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import axios from 'axios';

const Modals = (props) => {
	const [open, setOpen] = React.useState(props.open);
	const [description, setDescription] = useState('');

	console.log(props.videoId);

	useEffect(() => {
		const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${props.videoId}&key=${props.apiKey}`;
		axios
			.get(url)
			.then((response) => {
				console.log(response.data);
				setDescription(response.data.items[0].snippet.description);
			})
			.catch((error) => console.log(error));
	}, []);

	console.log(1);
	console.log(props.open);

	return (
		<Modal
			key={props.id}
			style={{
				position: 'absolute',
				top: '100px',
				left: '400px'
			}}
			basic
			onClose={() => {
				props.setOpen(false);
				props.setClicked(false);
			}}
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
