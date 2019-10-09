/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { LinkedInIcon, MailIcon, GitHubIcon } from './_ui/icons';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
	const { site: { siteMetadata: { github, email, linkedIn } } } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						github
						email
						linkedIn
					}
				}
			}
		`
	);

	return (
		<div sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
			<div sx={{ width: '100vw' }}>
				<Styled.h1>se-rene</Styled.h1>
				<Styled.h2> Serene Lim | Full Stack Developer</Styled.h2>
				<Styled.h3>I code and make things happen.</Styled.h3>
				<div>
					<Styled.a href={linkedIn}>
						<LinkedInIcon />
					</Styled.a>
					<Styled.a href={`mailto:${email}`}>
						<MailIcon />
					</Styled.a>
					<Styled.a href={github}>
						<GitHubIcon />
					</Styled.a>
				</div>
			</div>
		</div>
	);
};
