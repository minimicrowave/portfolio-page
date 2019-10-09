import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Card from '../components/_ui/card';

import { Styled } from 'theme-ui';
import { LinkIcon } from '../components/_ui/icons';

const IndexPage = () => {
	const { RubberDuckyIcon, CalenderIcon, PlaneIcon } = useStaticQuery(graphql`
		query Icons {
			CalenderIcon: file(relativePath: { eq: "CalenderIcon.svg" }) {
				publicURL
			}
			RubberDuckyIcon: file(relativePath: { eq: "RubberDucky.svg" }) {
				publicURL
			}
			PlaneIcon: file(relativePath: { eq: "PlaneIcon.svg" }) {
				publicURL
			}
		}
	`);

	return (
		<Layout>
			<SEO
				title="Home"
				description="The journey of turning raw ideas into a tangible reality has
						always intrigued me. Palmigo - A manpower schedule management application, with both user and
						administrator interface. Save The Eggs -  A HTML game, inspired by the arcade classic, Frogger. Flighto-san - A flight-tracker prototype that allows simultaneous tracking of
						multiple flights."
			/>

			<Card
				backgroundColor="#baeced"
				front={
					<div>
						<h3>
							The journey of turning raw ideas into a tangible reality
							has always intrigued me.
						</h3>
						<Styled.h5>
							Pshh. Click on the following boxes to find out more!
						</Styled.h5>
					</div>
				}
				back={
					<Fragment>
						<h5>
							<i>
								“A ship in harbor is safe, but that is not what
								ships are built for.”<br />
							</i>
						</h5>
						<h5>– John A. Shedd</h5>
					</Fragment>
				}
			/>
			<Card
				isIcon
				backgroundColor="#f9e1ef"
				front={
					<img
						style={{ width: '100%' }}
						src={CalenderIcon.publicURL}
						alt={'Calender Icon'}
					/>
				}
				back={
					<div>
						<h3>
							<Styled.a
								onClick={() =>
									window.open(
										'http://se-rene.com/Save-The-Eggs/'
									)}
							>
								<LinkIcon />
							</Styled.a>Palmigo
						</h3>
						<h4>
							A manpower schedule management application, with both user
							and administrator interface.
						</h4>
						<Styled.h5>
							Tech Stack: React, Ruby on Rails, PosgreSQL
						</Styled.h5>
					</div>
				}
			/>
			<hr style={{ width: '100%', height: 0, margin: 0, borderWidth: 0 }} />
			<Card
				isIcon
				backgroundColor="#fdfbe6"
				front={
					<img
						style={{ width: '100%' }}
						src={RubberDuckyIcon.publicURL}
						alt={'Rubber Ducky Icon'}
					/>
				}
				back={
					<div>
						<h3>
							<Styled.a
								onClick={() =>
									window.open(
										'http://se-rene.com/Save-The-Eggs/'
									)}
							>
								<LinkIcon />
							</Styled.a>Save The Eggs
						</h3>
						<h4>A HTML game, inspired by the arcade classic, Frogger.</h4>
						<Styled.h5>Tech Stack: HTML5 Canvas</Styled.h5>
					</div>
				}
			/>
			<Card
				isIcon
				backgroundColor="#b4cffd"
				front={
					<img
						src={PlaneIcon.publicURL}
						alt={'Plane Icon'}
						style={{ width: '100%' }}
					/>
				}
				back={
					<div>
						<h3>
							<Styled.a
								onClick={() =>
									window.open(
										'http://se-rene.com/Save-The-Eggs/'
									)}
							>
								<LinkIcon />
							</Styled.a>Flighto-san
						</h3>
						<h4>
							A flight-tracker prototype that allows simultaneous
							tracking of multiple flights.
						</h4>
						<Styled.h5>Tech Stack: Node.js, Express.js</Styled.h5>
					</div>
				}
			/>
		</Layout>
	);
};

export default IndexPage;
