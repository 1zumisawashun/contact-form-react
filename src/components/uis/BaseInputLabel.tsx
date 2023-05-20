import { grey, red } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

const LabelWrapper = styled('div')`
  align-items: center;
  display: flex;
  gap: 5px;
`
const Label = styled('label')`
  font-size: 1rem;
  font-weight: bold;
`
const Annotation = styled('p')`
  font-size: 0.75rem;
  text-align: left;
`
const RequiredLabel = styled('label')`
  background: ${red[800]};
  border-radius: 3px;
  color: white;
  font-size: 0.75rem;
  padding: 0 5px;
`
const OptionedLabel = styled('label')`
  background: ${grey[800]};
  border-radius: 5px;
  color: white;
  font-size: 0.75rem;
  padding: 0 5px;
`

type BaseInputLabelProps = {
  label?: string
  annotation?: string
  isRequired?: boolean
  isOptioned?: boolean
}

export const BaseInputLabel: React.FC<BaseInputLabelProps> = ({
  label = '',
  annotation = '',
  isRequired = false,
  isOptioned = false
}) => {
  return (
    <>
      {label ? (
        <LabelWrapper>
          <Label htmlFor={label}>{label}</Label>
          {isRequired ? <RequiredLabel>必須</RequiredLabel> : null}
          {isOptioned ? <OptionedLabel>任意</OptionedLabel> : null}
        </LabelWrapper>
      ) : null}

      {annotation ? <Annotation>{annotation}</Annotation> : null}
    </>
  )
}
