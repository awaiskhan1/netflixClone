import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabDevices from '../components/tabs_nav/TabDevices';
import TabDoor from '../components/tabs_nav/TabDoor';
import TabPrices from '../components/tabs_nav/TabPrices';
import TabContentOne from './tab_content/TabContentOne';
import TabContentTwo from './tab_content/TabContentTwo';
import TabContentThree from './tab_content/TabContentThree';
import '../css/TabsNav.css';

class TabComponent extends Component {
	state = {
		tabIndex : 0
	}
	render() {
		return (
			<div>
				<Tabs className="tabs" selectedIndex={this.state.tabIndex}
					onSelect={tabIndex => this.setState({tabIndex})}>
					<TabList className="tab-nav-container">
						<Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active': null}`}>
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
						<Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active': null}`}>
							<TabDevices />
							<p className="lgScreen" style={{ marginTop: '-5.3125rem' }}>
								<strong>Watch anywhere</strong>
							</p>
							<span className="mdScreen" style={{ marginTop: '-5.3125rem' }}>
								Devices
							</span>
						</Tab>
						<Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active': null}`}>
							<TabPrices />
							<p className="lgScreen">
								<strong>Pick your price</strong>
							</p>
							<span className="mdScreen">Price</span>
						</Tab>
					</TabList>

					{/* Tabs Content */}
					<TabPanel>
						<TabContentOne />
					</TabPanel>
					<TabPanel>
						<TabContentTwo />
					</TabPanel>
					<TabPanel>
						<TabContentThree />
					</TabPanel>
				</Tabs>
			</div>
		);
	}
}

export default TabComponent;