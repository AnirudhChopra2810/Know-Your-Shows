import { COMMENT_KEYS } from '@babel/types';
import React, { useState } from 'react';
import SidebarMenu from './sidebarMenu';
import Nav from './nav';
import Cards from './card';
import config from '../assets/config';
import ProviderList from './providerlist';
import './styles.css';

const { YT_CHANNEL_IDS, API_KEY } = config;

const App = () => {
	const [sidebar, setSidebar] = useState(false);

	return (
		<div>
			<Nav setSidebar={setSidebar} />
			<ProviderList channelId={YT_CHANNEL_IDS.NETFLIX} apiKey={API_KEY} />
			{sidebar === true && <SidebarMenu setSidebar={setSidebar} sidebar={sidebar} />}
			{/* <Cards /> */}
		</div>
	);
};

export default App;
