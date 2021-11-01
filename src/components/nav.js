import { useState } from 'react';
import { Menu, Segment, Header } from 'semantic-ui-react';

const Nav = () => {
	return (
		<div style={{ backgroundColor: 'black' }}>
			<Menu inverted>
				<Menu.Item header>Our Company</Menu.Item>
				<Menu.Item name="aboutUs" />
				<Menu.Item name="jobs" />
				<Menu.Item name="locations" />
			</Menu>
		</div>
	);
};

export default Nav;
