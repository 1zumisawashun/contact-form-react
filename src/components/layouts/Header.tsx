import { styled, Theme } from '@mui/material/styles'
import { AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '@/assets/react.svg'

const CustomAppbar = styled(AppBar)<{ theme?: Theme }>`
  background: white;
  /* box-shadow: none; */
  padding: 0;
  z-index: ${({ theme }) => theme.zIndex.drawer + 2};
`
const CustomToolbar = styled(Toolbar)`
  color: black;
  display: flex;
  justify-content: space-between;
  @media all {
    min-height: 60px;
  }
`
const LinkWrapper = styled('div')`
  display: flex;
  gap: 20px;
`

export const Header: React.FC = () => {
  return (
    <CustomAppbar position="fixed">
      <CustomToolbar>
        <img src={logo} alt="" />

        <LinkWrapper>
          <Link to="/">index</Link>
          <Link to="/catalog">catalog</Link>
          <Link to="/contact">contact</Link>
        </LinkWrapper>
      </CustomToolbar>
    </CustomAppbar>
  )
}
