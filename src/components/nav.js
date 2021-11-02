import { useState } from 'react';
import { Menu, Segment, Header, Icon } from 'semantic-ui-react';

const Nav = (props) => {
	const handleClick = () => {
		props.setSidebar(true);
	};
	return (
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
	);
};

export default Nav;
