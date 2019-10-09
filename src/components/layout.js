/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import './layout.css';


const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div
				style={{
					display: 'flex',
					flexFlow: 'wrap',
					justifyContent: 'center'
				}}
			>
				{children}
				<footer
					style={{
						backgroundColor: '#f6f6f6',
						width: '100%',
						height: '65vh',
						marginTop: '-60vh',
						zIndex: -1,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
					}}
				/>
			</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
