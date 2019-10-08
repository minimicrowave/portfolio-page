/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { LinkedInIcon, MailIcon, GitHubIcon } from './_ui/icons';

export default () => (
	<div sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
		<div sx={{width: '100vw'}}>
			<Styled.h1>se-rene</Styled.h1>
			<Styled.h2> Serene Lim | Full Stack Developer</Styled.h2>
			<Styled.h3>I code and make things happen.</Styled.h3>
			<div>
				<Styled.a href="https://www.linkedin.com/in/se-rene/">
					<LinkedInIcon />
				</Styled.a>
				<Styled.a href="mailto:se-rene@outlook.com">
					<MailIcon />
				</Styled.a>
				<Styled.a href="https://github.com/minimicrowave">
					<GitHubIcon />
				</Styled.a>
			</div>
		</div>
	</div>
);
