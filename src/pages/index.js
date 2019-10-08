import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import RubberDucky from '../images/RubberDucky.svg';
import PlaneIcon from '../images/PlaneIcon.svg';
import CalenderIcon from '../images/CalenderIcon.svg';

import Card from '../components/_ui/card';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />

		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '50vh',
				width: '50vh',
				backgroundColor: '#baeced'
			}}
		>
			<div style={{ padding: '20%' }}>
				<h3>
					The journey of turning raw ideas into a tangible reality has always
					intrigued me.
				</h3>
				<h5 style={{ display: 'block', marginTop: 20, fontSize: 13 }}>
					Pshh. Click on the following boxes to find out more!
				</h5>
			</div>
		</div>
		<Card
			backgroundColor="#f9e1ef"
			text="hi"
			front={<img src={CalenderIcon} alt="Calender Icon" style={{ width: '100%' }} />}
			back={<div>hi</div>}
		/>
		<hr style={{ width: '100%', height: 0, margin: 0 }} />
		<Card
			backgroundColor="#fdfbe6"
			text="hi"
			front={
				<img src={RubberDucky} alt="Rubber Ducky Icon" style={{ width: '100%' }} />
			}
			back={<div>hi</div>}
		/>
		<Card
			backgroundColor="#b4cffd"
			text="hi"
			front={<img src={PlaneIcon} alt="Plane Icon" style={{ width: '100%' }} />}
			back={<div>hi</div>}
		/>
	</Layout>
);

export default IndexPage;
