import { styled } from '@mui/material/styles'
import { Home as HomeTemplate } from '@/components/templates/Home'
import { Head, Header } from '@/components/layouts'
import { mediaQuery } from '@/functions/helpers'

const Container = styled('div')`
  margin-top: 60px;
  min-height: calc(100vh - 60px);
`
const Inner = styled('div')`
  margin: auto;
  width: 60%;
  ${mediaQuery('sp')} {
    width: 100%;
  }
`

export const Home: React.FC = () => {
  return (
    <>
      <Head title="home" />
      <Header />
      <Container>
        <Inner>
          <HomeTemplate />
        </Inner>
      </Container>
    </>
  )
}
