import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './ui.css';

/** @jsx jsx */
import { jsx } from 'theme-ui';

const FadeTransition = (props) => (
	<CSSTransition
		{...props}
		classNames={{
			enter: 'fade-enter',
			enterActive: 'fade-enter-active',
			exit: 'fade-exit'
		}}
		addEndListener={(node, done) => {
			node.addEventListener('transitionend', done, false);
		}}
	/>
);

export default ({ front, back, backgroundColor }) => {
	const [ clicked, setClicked ] = useState(false);

	return (
		<div
			sx={{
				fontFamily: 'Helvetica',
				backgroundColor,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '50vh',
				width: '50vh',
				transition: '0.3s',
				':hover': {
					cursor: 'pointer',
					backgroundColor: backgroundColor + '80'
				}
			}}
			onClick={() => setClicked(!clicked)}
		>
			<SwitchTransition mode={'out-in'}>
				<FadeTransition
					key={clicked ? `Clicked: ${front}` : `Not Clicked: ${back}`}
				>
					<div sx={{ fontFamily: 'Helvetica' }}>{clicked ? back : front}</div>
				</FadeTransition>
			</SwitchTransition>
		</div>
	);
};
