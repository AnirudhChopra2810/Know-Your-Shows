import { COMMENT_KEYS } from '@babel/types';
import React, { useState } from 'react';
import SidebarMenu from './sidebarMenu';
import Nav from './nav';
import Cards from './card';
import config from '../assets/config';
import ProviderList from './providerlist';

const { YT_CHANNEL_IDS } = config;

const App = () => {
	const [sidebar, setSidebar] = useState(false);

	return (
		<div>
			<Nav setSidebar={setSidebar} />
			<ProviderList channelId={YT_CHANNEL_IDS.NETFLIX} />
			{sidebar === true && <SidebarMenu setSidebar={setSidebar} sidebar={sidebar} />}
			{/* <Cards /> */}
		</div>
	);
};

export default App;
