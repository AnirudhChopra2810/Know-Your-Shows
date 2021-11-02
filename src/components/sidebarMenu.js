import React from 'react';
import { Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import ProviderList from './providerlist';
import config from '../assets/config';
const { YT_CHANNEL_IDS, API_KEY } = config;

const SidebarMenu = ({ setSidebar, sidebar }) => {
	const [visible, setVisible] = React.useState(sidebar);

	return (
		<Grid columns={1}>
			<Grid.Column>
				<Sidebar.Pushable as={Segment}>
					<Sidebar
						as={Menu}
						animation="overlay"
						icon="labeled"
						inverted
						onHide={() => {
							setVisible(false);
							// setSidebar(false);
						}}
						vertical
						visible={visible}
						width="thin"
					>
						<Menu.Item as="a">
							<Icon name="home" />
							Home
						</Menu.Item>
						<Menu.Item as="a">
							<Icon name="gamepad" />
							Games
						</Menu.Item>
						<Menu.Item as="a">
							<Icon name="camera" />
							Channels
						</Menu.Item>
					</Sidebar>

					<Sidebar.Pusher dimmed={visible}>
						<Segment basic></Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</Grid.Column>
		</Grid>
	);
};

export default SidebarMenu;
