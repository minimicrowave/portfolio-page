/** @jsx jsx */
import { jsx } from 'theme-ui'
export default props => (
  <div
    {...props}
    sx={{
      // values referencing scales defined in a theme
      color: 'primary',
      bg: 'lightgray',
      fontFamily: 'heading',
      // raw CSS value
      boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
    }}
  />
)