import React, { useState } from 'react';
import Nav from './nav';
import config from '../assets/config';
import ProviderList from './providerlist';

import './styles.css';

const { YT_CHANNEL_IDS, API_KEY } = config;

const App = () => {
	const [sidebar, setSidebar] = useState(false);

	console.log(sidebar);

	return (
		<div>
			<Nav />
			{/* <ProviderList channelId={YT_CHANNEL_IDS.NETFLIX} apiKey={API_KEY} /> 
			<ProviderList channelId={YT_CHANNEL_IDS.AMAZON_PRIME} apiKey={API_KEY} />
			<Cards /> */}
		</div>
	);
};

export default App;
