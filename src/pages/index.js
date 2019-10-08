import React, { Fragment } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import RubberDucky from '../images/RubberDucky.svg';
import PlaneIcon from '../images/PlaneIcon.svg';
import CalenderIcon from '../images/CalenderIcon.svg';

import Card from '../components/_ui/card';

import { Styled } from 'theme-ui';
import { LinkIcon } from '../components/_ui/icons';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />

		<Card
			backgroundColor="#baeced"
			front={
				<div>
					<h3>
						The journey of turning raw ideas into a tangible reality has
						always intrigued me.
					</h3>
					<h5 style={{ display: 'block', marginTop: 20, fontSize: 13 }}>
						Pshh. Click on the following boxes to find out more!
					</h5>
				</div>
			}
			back={
				<Fragment>
					<h5>
						<i>
							“A ship in harbor is safe, but that is not what ships are
							built for.”<br />
						</i>
					</h5>
					<h5>– John A. Shedd</h5>
				</Fragment>
			}
		/>
		<Card
			isIcon
			backgroundColor="#f9e1ef"
			front={<img src={CalenderIcon} alt="Calender Icon" style={{ width: '100%' }} />}
			back={
				<div>
					<h3>
						<Styled.a
							onClick={() =>
								window.open('http://se-rene.com/Save-The-Eggs/')}
						>
							<LinkIcon />
						</Styled.a>Palmigo
					</h3>
					<h4>
						A manpower schedule management application, with both user and
						administrator interface.
					</h4>
					<h5 style={{ display: 'block', marginTop: 20, fontSize: 13 }}>
						Tech Stack: React, Ruby on Rails, PosgreSQL
					</h5>
				</div>
			}
		/>
		<hr style={{ width: '100%', height: 0, margin: 0, borderWidth: 0 }} />
		<Card
			isIcon
			backgroundColor="#fdfbe6"
			front={
				<img src={RubberDucky} alt="Rubber Ducky Icon" style={{ width: '100%' }} />
			}
			back={
				<div>
					<h3>
						<Styled.a
							onClick={() =>
								window.open('http://se-rene.com/Save-The-Eggs/')}
						>
							<LinkIcon />
						</Styled.a>Save The Eggs
					</h3>
					<h4>A HTML game, inspired by the arcade classic, Frogger.</h4>
					<h5 style={{ display: 'block', marginTop: 20, fontSize: 13 }}>
						Tech Stack: HTML5 Canvas
					</h5>
				</div>
			}
		/>
		<Card
			isIcon
			backgroundColor="#b4cffd"
			front={<img src={PlaneIcon} alt="Plane Icon" style={{ width: '100%' }} />}
			back={
				<div>
					<h3>
						<Styled.a
							onClick={() =>
								window.open('http://se-rene.com/Save-The-Eggs/')}
						>
							<LinkIcon />
						</Styled.a>Flighto-san
					</h3>
					<h4>
						A flight-tracker prototype that allows simultaneous tracking of
						multiple flights.
					</h4>
					<h5 style={{ display: 'block', marginTop: 20, fontSize: 13 }}>
						Tech Stack: Node.js, Express.js
					</h5>
				</div>
			}
		/>
	</Layout>
);

export default IndexPage;
