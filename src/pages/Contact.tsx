import { styled } from '@mui/material/styles'
import { Contact as ContactTemplate } from '@/components/templates/Contact'
import { Head, Header } from '@/components/layouts'
import { mediaQuery } from '@/functions/helpers'

const Container = styled('div')`
  background-color: white;
  margin-top: 60px;
  min-height: 300px;
`
const Inner = styled('div')`
  margin: auto;
  width: 60%;
  ${mediaQuery('sp')} {
    width: 100%;
  }
`

export const Contact: React.FC = () => {
  return (
    <>
      <Head title="contact" />
      <Header />
      <Container>
        <Inner>
          <ContactTemplate />
        </Inner>
      </Container>
    </>
  )
}
