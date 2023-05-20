import { styled } from '@mui/material/styles'
import { ReactNode, useState, BaseSyntheticEvent } from 'react'
import { Head } from '@/components/layouts'
import {
  Button,
  InputText,
  InputTextarea,
  InputRadioGroup,
  InputCheckboxDisclosure
} from '@/components/uis'
import { useDisclosure } from '@/functions/hooks'

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
type ComponentLayoutProps = {
  title: string
  children: ReactNode
}

const ComponentLayout: React.FC<ComponentLayoutProps> = ({
  title,
  children
}) => {
  return (
    <ComponentContainer>
      <ComponentTitle>{title}</ComponentTitle>
      <ComponentGap>{children}</ComponentGap>
    </ComponentContainer>
  )
}

export const Catalog: React.FC = () => {
  const [radio, setRadio] = useState<string>('')

  const inputCheckboxDisclosure = useDisclosure()

  const handleRadio = (e: BaseSyntheticEvent) => {
    setRadio(e.target.value)
  }
  return (
    <>
      <Head title="catalog" />
      <Container>
        <Inner>
          <ComponentLayout title="Button">
            <Button>Button</Button>
          </ComponentLayout>

          <ComponentLayout title="InputText">
            <InputText label="label" annotation="annotation" isRequired />
            <InputText
              label="label"
              annotation="annotation"
              isRequired
              error
              helperText="helperText"
            />
            <InputText
              label="label"
              annotation="annotation"
              isRequired
              disabled
            />
          </ComponentLayout>

          <ComponentLayout title="InputTextarea">
            <InputTextarea label="label" annotation="annotation" isRequired />
            <InputTextarea
              label="label"
              annotation="annotation"
              isRequired
              error
              helperText="helperText"
            />
            <InputTextarea
              label="label"
              annotation="annotation"
              isRequired
              disabled
            />
          </ComponentLayout>

          <ComponentLayout title="InputRadioGroup">
            <InputRadioGroup
              options={[
                { value: 'bed', label: 'Bed' },
                { value: 'blanket', label: 'Blanket' },
                { value: 'chair', label: 'Chair' },
                { value: 'lamp', label: 'Lamp' },
                { value: 'plant', label: 'Plant' }
              ]}
              label="label"
              name="default"
              value={radio}
              onChange={(e) => handleRadio(e)}
              annotation="annotation"
              isRequired
            />
            <InputRadioGroup
              options={[
                { value: 'bed', label: 'Bed' },
                { value: 'blanket', label: 'Blanket' },
                { value: 'chair', label: 'Chair' },
                { value: 'lamp', label: 'Lamp' },
                { value: 'plant', label: 'Plant' }
              ]}
              label="label"
              name="default"
              value={radio}
              onChange={(e) => handleRadio(e)}
              annotation="annotation"
              isRequired
              disabled
            />
          </ComponentLayout>

          <ComponentLayout title="InputCheckboxDisclosure">
            <InputCheckboxDisclosure
              label="label"
              annotation="annotation"
              isRequired
              onChange={inputCheckboxDisclosure.toggle}
              value={inputCheckboxDisclosure.isOpen}
              checkboxLabel="checkboxLabel"
            />

            <InputCheckboxDisclosure
              label="label"
              annotation="annotation"
              isRequired
              onChange={inputCheckboxDisclosure.toggle}
              value={inputCheckboxDisclosure.isOpen}
              checkboxLabel="checkboxLabel"
              disabled
            />
          </ComponentLayout>
        </Inner>
      </Container>
    </>
  )
}
