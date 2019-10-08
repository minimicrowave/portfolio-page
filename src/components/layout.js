/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

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
						height: '85vh',
						marginTop: '-80vh',
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
