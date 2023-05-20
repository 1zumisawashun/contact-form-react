import { styled } from '@mui/material/styles'
import { Head, Header } from '@/components/layouts'
import { Catalog as CatalogTemplate } from '@/components/templates/Catalog'
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

export const Catalog: React.FC = () => {
  return (
    <>
      <Head title="catalog" />
      <Header />
      <Container>
        <Inner>
          <CatalogTemplate />
        </Inner>
      </Container>
    </>
  )
}
