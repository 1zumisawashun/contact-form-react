import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { useErrorBoundary } from 'react-error-boundary'
import { CatalogCard } from '@/components/models'
import {
  Button,
  InputText,
  InputTextarea,
  InputRadioGroup,
  InputCheckboxDisclosure,
  Panel,
  Table,
  ErrorMessage,
  Loading,
  PrintObject
} from '@/components/uis'
import { useDisclosure } from '@/functions/hooks'
import { oneHundredText, fiveHundredText } from '@/functions/constants/texts'
import { BaseButtonWrapper } from '@/functions/themes'
import { catalogOptions } from '@/functions/constants/options'

const GapWrapper = styled('div')`
  display: grid;
  gap: 20px;
  padding: 20px;
`

export const Catalog: React.FC = () => {
  const [radio, setRadio] = useState<string>('')

  const inputCheckboxDisclosure = useDisclosure()
  const loading = useDisclosure()
  const { showBoundary } = useErrorBoundary()

  return (
    <GapWrapper>
      <CatalogCard title="PrintObject">
        <PrintObject content={catalogOptions} />
      </CatalogCard>

      <CatalogCard title="ErrorMessage">
        <ErrorMessage message="message" />
      </CatalogCard>

      <CatalogCard title="react-error-boundary">
        <Button onClick={() => showBoundary(new Error('bomb!'))}>bomb!</Button>
      </CatalogCard>

      <CatalogCard title="Loading">
        <Button
          onClick={async () => {
            loading.open()
            // eslint-disable-next-line
            await new Promise((resolve) => setTimeout(resolve, 3000))
            loading.close()
          }}
        >
          Loading
        </Button>
        {loading.isOpen && <Loading />}
      </CatalogCard>

      <CatalogCard title="Table">
        <Table options={catalogOptions} />
      </CatalogCard>

      <CatalogCard title="Panel">
        <Panel canScroll>{fiveHundredText}</Panel>
        <Panel>{oneHundredText}</Panel>
        <Panel hideBorder>{oneHundredText}</Panel>
      </CatalogCard>

      <CatalogCard title="Button">
        <BaseButtonWrapper>
          <div>
            <Button size="small">Button</Button>
          </div>
          <div>
            <Button size="medium">Button</Button>
          </div>
          <div>
            <Button size="large">Button</Button>
          </div>
        </BaseButtonWrapper>
        <Button>Button</Button>
        <Button isLoading>Button</Button>
        <Button disabled>Button</Button>
        <BaseButtonWrapper>
          <div>
            <Button size="small" variant="outlined">
              Button
            </Button>
          </div>
          <div>
            <Button size="medium" variant="outlined">
              Button
            </Button>
          </div>
          <div>
            <Button size="large" variant="outlined">
              Button
            </Button>
          </div>
        </BaseButtonWrapper>
        <Button variant="outlined">Button</Button>
        <Button isLoading variant="outlined">
          Button
        </Button>
        <Button disabled variant="outlined">
          Button
        </Button>
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
          options={catalogOptions}
          label="label"
          name="default"
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
          annotation="annotation"
          isRequired
        />
        <p>※エラー発生時はErrorMessageコンポーネントと一緒に使う</p>
        <ErrorMessage message="message" />
        <InputRadioGroup
          options={catalogOptions}
          label="label"
          name="default"
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
          annotation="annotation"
          isRequired
        />
        <InputRadioGroup
          options={catalogOptions}
          label="label"
          name="default"
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
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
        <p>※エラー発生時はErrorMessageコンポーネントと一緒に使う</p>
        <ErrorMessage message="message" />
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
