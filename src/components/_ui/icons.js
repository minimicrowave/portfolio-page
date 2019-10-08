/** @jsx jsx */
import { jsx } from 'theme-ui';
import { TiSocialLinkedin } from 'react-icons/ti';
import { FiGithub, FiMail, FiLink } from 'react-icons/fi';

const LinkedInIcon = () => (
	<TiSocialLinkedin
		sx={{
			color: 'inherit',
			fontSize: [ 5, 5, 6 ],
			margin: 2
		}}
	/>
);

const MailIcon = () => (
	<FiMail
		sx={{
			color: 'inherit',
			fontSize: [ 4, 4, 5 ],
			margin: 2,
			mr: 3
		}}
	/>
);

const GitHubIcon = () => (
	<FiGithub
		sx={{
			color: 'inherit',
			fontSize: [ 4, 4, 5 ],
			margin: 2
		}}
	/>
);

const LinkIcon = () => (
	<FiLink
		sx={{
			color: 'inherit',
			fontSize: [ 4, 4, 5 ],
			margin: 2,
			transition: '0.3s',
			":hover": {
				color: 'white'
			}
		}}
	/>
);

export { LinkedInIcon, MailIcon, GitHubIcon, LinkIcon };
