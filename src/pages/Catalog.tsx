import { styled } from '@mui/material/styles'
import { Head } from '@/components/layouts'
import { Button } from '@/components/uis'

const Container = styled('div')`
  background-color: 'white';
  margin-top: 54px;
  min-height: 300px;
  width: 100%;
`
const Inner = styled('div')`
  margin: auto;
  width: 60%;
`
const FormContainer = styled('div')`
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 40px;
`
const ComponentContainer = styled('div')`
  background: white;
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 40px;
  padding: 16px;
  padding-bottom: 8px;
  position: relative;
`
const ComponentGap = styled('div')`
  display: grid;
  gap: 10px;
`
const ComponentTitle = styled('p')`
  background-color: white;
  font-size: 1.25rem;
  font-weight: bold;
  left: 16px;
  padding: 0 8px;
  position: absolute;
  top: -16px;
`

export const Catalog: React.FC = () => {
  return (
    <>
      <Head title="catalog" />
      <Container>
        <Inner>
          <FormContainer>
            <ComponentContainer>
              <ComponentTitle>Button</ComponentTitle>
              <ComponentGap>
                <Button>Button</Button>
              </ComponentGap>
            </ComponentContainer>
          </FormContainer>
        </Inner>
      </Container>
    </>
  )
}
