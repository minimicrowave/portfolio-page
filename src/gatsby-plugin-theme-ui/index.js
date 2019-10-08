export default {
	colors: {
		text: '#1d1d1d',
		background: '#ffd700',
		primary: '#808080',
		secondary: '#baeced',
		grey: '#3c3c3c'
	},
	fonts: {
		body: 'Karla',
		heading: 'Bitter',
		monospace: 'Menlo, monospace'
	},
	breakpoints: [ '40em', '56em', '64em' ],
	fontWeights: {
		body: 400,
		heading: 700
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125
	},
	fontSizes: [ 12, 14, 16, 20, 24, 28, 32, 48, 64, 72 ],
	space: [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ],
	styles: {
		body: {
			fontFamily: 'body'
		},
		a: {
			color: 'primary',
			transition: '0.3s',
			':hover': {
				color: 'secondary',
				cursor: 'pointer'
			}
		},
		h1: {
			color: 'grey',
			textAlign: 'center',
			fontFamily: 'heading',
			fontSize: [ 7, 8, 9 ],
			lineHeight: 1,
			width: '98vw',
			padding: '1vw',
			fontWeight: 'body',
			margin: 0
		},
		h2: {
			fontFamily: 'heading',
			color: 'grey',
			fontSize: [ 2, 3, 4 ],
			padding: 1,
			fontWeight: 'body',
			margin: 1
		},
		h3: {
			fontFamily: 'heading',
			color: 'primary',
			fontSize: [ 1, 2, 3 ],
			padding: 1,
			fontWeight: 'body',
			margin: 0
		}
	}
};
