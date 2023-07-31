import { styled } from '@mui/material/styles'
import { Sample as SampleTemplate } from '@/components/templates/Sample'
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

export const Sample: React.FC = () => {
  return (
    <>
      <Head title="sample" />
      <Header />
      <Container>
        <Inner>
          <SampleTemplate />
        </Inner>
      </Container>
    </>
  )
}
