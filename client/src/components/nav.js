import { useState } from 'react';
import { Menu, Segment, Header, Icon, Grid, Sidebar, Image } from 'semantic-ui-react';
import config from '../assets/config';
import ProviderList from './providerlist';
const { YT_CHANNEL_IDS, API_KEY } = config;

const SidebarMenu = () => {
	return;
};

const Nav = (props) => {
	const [visible, setVisible] = useState(false);

	const handleClick = () => {
		setVisible(true);
		console.log('yo');
	};
	return (
		<div>
			<div style={{ backgroundColor: 'black' }}>
				<Menu inverted size="huge">
					<Menu.Item header>Know Your Shows</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item onClick={handleClick}>
							<Icon name="th" color="yellow" />
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</div>
			<Grid columns={1}>
				<Grid.Column>
					<Sidebar.Pushable as={Segment}>
						<Sidebar
							fixed
							as={Menu}
							animation="overlay"
							icon="labeled"
							inverted
							onHide={() => {
								setVisible(false);
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
								About
							</Menu.Item>
							<Menu.Item as="a">
								<Icon name="camera" />
								Contact me
							</Menu.Item>
							<Menu.Item as="a" href="https://github.com/AnirudhChopra2810">
								<Icon name="github" />
							</Menu.Item>
							<Menu.Item as="a" href="https://www.linkedin.com/in/anirudh-chopra-300116225/">
								<Icon name="linkedin" />
							</Menu.Item>
						</Sidebar>

						<Sidebar.Pusher dimmed={visible}>
							<Segment basic>
								<ProviderList channelId={YT_CHANNEL_IDS.NETFLIX} apiKey={API_KEY} />
								<ProviderList channelId={YT_CHANNEL_IDS.AMAZON_PRIME} apiKey={API_KEY} />
							</Segment>
						</Sidebar.Pusher>
					</Sidebar.Pushable>
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default Nav;
// {sidebar === true && <SidebarMenu setSidebar={setSidebar} sidebar={sidebar} />}
