import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { useErrorBoundary } from 'react-error-boundary'
import {
  Button,
  InputText,
  InputTextarea,
  InputRadioGroup,
  InputCheckboxDisclosure,
  Panel,
  PanelCard,
  Table,
  ErrorMessage,
  Loading,
  PrintObject
} from '@/components/uis'
import { useDisclosure } from '@/functions/hooks'
import { oneHundredText, fiveHundredText } from '@/functions/constants/texts'
import { BaseButtonWrapper, BaseTitle } from '@/functions/themes'
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
      <BaseTitle>カタログ画面</BaseTitle>

      <PanelCard title="PrintObject">
        <PrintObject content={catalogOptions} />
      </PanelCard>

      <PanelCard title="ErrorMessage">
        <ErrorMessage message="message" />
      </PanelCard>

      <PanelCard title="react-error-boundary">
        <Button onClick={() => showBoundary(new Error('bomb!'))}>bomb!</Button>
      </PanelCard>

      <PanelCard title="Loading">
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
      </PanelCard>

      <PanelCard title="Table">
        <Table options={catalogOptions} />
      </PanelCard>

      <PanelCard title="Panel">
        <Panel canScroll>{fiveHundredText}</Panel>
        <Panel>{oneHundredText}</Panel>
        <Panel hideBorder>{oneHundredText}</Panel>
      </PanelCard>

      <PanelCard title="Button">
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
      </PanelCard>

      <PanelCard title="InputText">
        <InputText label="label" annotation="annotation" isRequired />
        <InputText
          label="label"
          annotation="annotation"
          isRequired
          error
          helperText="helperText"
        />
        <InputText label="label" annotation="annotation" isRequired disabled />
      </PanelCard>

      <PanelCard title="InputTextarea">
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
      </PanelCard>

      <PanelCard title="InputRadioGroup">
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
      </PanelCard>

      <PanelCard title="InputCheckboxDisclosure">
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
      </PanelCard>
    </GapWrapper>
  )
}
