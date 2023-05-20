import { useState, BaseSyntheticEvent } from 'react'
import { styled } from '@mui/material/styles'
import { CatalogCard } from '@/components/models'
import {
  Button,
  InputText,
  InputTextarea,
  InputRadioGroup,
  InputCheckboxDisclosure,
  Panel,
  Table
} from '@/components/uis'
import { useDisclosure } from '@/functions/hooks'
import { oneHundredText, fiveHundredText } from '@/functions/constants/texts'

const GapWrapper = styled('div')`
  display: grid;
  gap: 20px;
  padding: 20px;
`

const options = [
  { value: 'bed', label: 'Bed' },
  { value: 'blanket', label: 'Blanket' },
  { value: 'chair', label: 'Chair' },
  { value: 'lamp', label: 'Lamp' },
  { value: 'plant', label: 'Plant' }
]

export const Catalog: React.FC = () => {
  const [radio, setRadio] = useState<string>('')

  const inputCheckboxDisclosure = useDisclosure()

  const handleRadio = (e: BaseSyntheticEvent) => {
    setRadio(e.target.value)
  }
  return (
    <GapWrapper>
      <CatalogCard title="Table">
        <Table options={options} />
      </CatalogCard>

      <CatalogCard title="Panel">
        <Panel canScroll>{fiveHundredText}</Panel>
        <Panel>{oneHundredText}</Panel>
        <Panel hideBorder>{oneHundredText}</Panel>

        <Panel color="negative" canScroll>
          {fiveHundredText}
        </Panel>
        <Panel color="negative">{oneHundredText}</Panel>
        <Panel color="negative" hideBorder>
          {oneHundredText}
        </Panel>

        <Panel color="positive" canScroll>
          {fiveHundredText}
        </Panel>
        <Panel color="positive">{oneHundredText}</Panel>
        <Panel color="positive" hideBorder>
          {oneHundredText}
        </Panel>
      </CatalogCard>

      <CatalogCard title="Button">
        <Button>Button</Button>
      </CatalogCard>

      <CatalogCard title="InputText">
        <InputText label="label" annotation="annotation" isRequired />
        <InputText
          label="label"
          annotation="annotation"
          isRequired
          error
          helperText="helperText"
        />
        <InputText label="label" annotation="annotation" isRequired disabled />
      </CatalogCard>

      <CatalogCard title="InputTextarea">
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
      </CatalogCard>

      <CatalogCard title="InputRadioGroup">
        <InputRadioGroup
          options={options}
          label="label"
          name="default"
          value={radio}
          onChange={(e) => handleRadio(e)}
          annotation="annotation"
          isRequired
        />
        <InputRadioGroup
          options={options}
          label="label"
          name="default"
          value={radio}
          onChange={(e) => handleRadio(e)}
          annotation="annotation"
          isRequired
          disabled
        />
      </CatalogCard>

      <CatalogCard title="InputCheckboxDisclosure">
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
      </CatalogCard>
    </GapWrapper>
  )
}
