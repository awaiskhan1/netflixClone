import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img from '../../images/tab-1-pic.png';
import { Button }  from './../Button';

const TabContentOne = () => {
	return (
		<TabContentContainer>
			<div className="container">
				<div className="tab-content">
					<div>
						<span className="title">
							If you decide Netflix isn't for you - no problem. No commitment.
							Cancel online anytime.
						</span>
						<br />
						<Link to="/choose-plan">
						<Button className="tab-btn" style={{ marginTop: '2rem' }}>
							try it now
						</Button>
						</Link>
					</div>
						<img src={Img} alt="" />
				</div>
			</div>
		</TabContentContainer>
	);
};

export default TabContentOne;


const TabContentContainer = styled.div`

	background: var(--main-deep-dark);
	.container {
		margin: 0 10%;
	}
	.title {
		margin-top: 2rem;
	}
	img {
		width: 100%;
	}
	.tab-content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
		align-items: center;
		font-size: 2rem;
		padding: 2.5rem;
	}
`;