import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';


class Header extends Component {
	render() {
		return (
			<HeaderComponent className="header-container">
				<div className="header-top">
					<Logo src={logo} alt="logo here"/>
					<NavLink to="/login" className="btn signIn-btn">Sign In</NavLink>
					{/* Header Content */}
					<div className="header-content">
						<Title>See what's next.</Title>
						<SubTitle>WATCH ANYWHERE. CANCEL ANYTIME.</SubTitle>
						<Link to="/choose-plan">
							<button  className="main-offer-btn"> try it now <Icon className="Icon" size={37} icon={ic_keyboard_arrow_right} />
							</button>
						</Link>
					</div>
				</div>
			</HeaderComponent>
		);
	}
}

export default Header;
// Logo
const Logo = styled.img`
	width: 10rem;
	height: 3.5rem;
	position: absolute;
	top: 25%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin-left: 0;
`;

// Header Container
const HeaderComponent = styled.div`
	.signIn-btn {
		right: 0;
		margin: 1.125rem 3% 0;
		padding: 0.4375rem 1.0625rem;
		font-weight: 400;
		line-height: normal;
		border-radius: 0.1875rem;
		font-size: 1rem;
		background: var(--main-red);
		position: absolute;
		translate: transform(-50% -50%);
		cursor: pointer;
		translate: transform(-50%, -50%);
		cursor: pointer;
		transition: background 0.2s ease-in;
		&:hover {
			background: var(--main-red-hover);
		}
	}

	// Header Top
	.header-top {
		position: relative;
		height: 10rem;
		z-index: 2;
		display:flex;
	}


	// Header Content
	.header-content {
		width: 65%;
		position: relative;
		top: 13rem;
		margin: 0rem auto 0;
		display: flex;
		justify-content: center;
		align-content: center;
		text-align: center;
		flex-direction: column;
		z-index: 2;

		// Lg Main
		.main-offer-btn {
			display: inline-block;
			background: var(--main-red);
			text-transform: uppercase;
			border: none;
			outline: none;
			margin: 0 33%;
			padding: 1rem 1.4rem;
			border-radius: 0.1875rem;
			font-size: 1.6rem;
			text-align: center;
			color: white;
			box-shadow: 0 1px 0 rgba(0,0,0,0.45);
			transition: background 0.2s ease-in;
			cursor: pointer;
			&:hover {
				background: var(--main-red-hover)
			}
		}
	}

`;

// Main Title
const Title = styled.h1`
	margin: 0 0 1.2rem;
	font-size: 5rem;
	font-weight: 700;
	line-height: 1.1em;

`;

// SubTitle
const SubTitle = styled.h2`
	font-weight: 400;
	font-size: 1.875rem;
	line-height: 1.25em;
	margin: 0 0 1.875rem;
	text-transform: uppercase;

`;
