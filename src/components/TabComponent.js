import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabDevices from '../components/tabs_nav/TabDevices';
import TabDoor from '../components/tabs_nav/TabDoor';
import TabPrices from '../components/tabs_nav/TabPrices';
import '../css/TabsNav.css';

class TabComponent extends Component {
	render() {
		return (
			<div>
				<Tabs className="tabs">
					<TabList className="tab-nav-container">
						<Tab>
							<TabDoor />
							<p className="lgScreen" style={{ marginBottom: '1.875rem' }}>
								<strong>
								No commitments
								<br />
								Cancel online at anytime
								</strong>
							</p>
							<span className="mdScreen" style={{ marginTop: '0.4rem' }}>
								Cancel
							</span>
						</Tab>
						<Tab>
							<TabDevices />
							<p className="lgScreen" style={{ marginTop: '-5.3125rem' }}>
								<strong>Watch anywhere</strong>
							</p>
							<span className="mdScreen" style={{ marginTop: '-5.3125rem' }}>
								Devices
							</span>
						</Tab>
						<Tab>
							<TabPrices />
							<p className="lgScreen">
								<strong>Pick your price</strong>
							</p>
							<span className="mdScreen">Price</span>
						</Tab>
					</TabList>

					{/* Tabs Content */}
					<TabPanel>
					<h2>Any content 1</h2>
					</TabPanel>
					<TabPanel>
					<h2>Any content 2</h2>
					</TabPanel>
					<TabPanel>
					<h2>Any content 3</h2>
					</TabPanel>
				</Tabs>
			</div>
		);
	}
}

export default TabComponent;