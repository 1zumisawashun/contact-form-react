import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import CheckIcon from '@mui/icons-material/Check'
import { Checkbox, FormControlLabel, FormControl } from '@mui/material'
import { styled } from '@mui/material/styles'
import { BaseInputLabel } from './BaseInputLabel'
import { SquareIcon } from './BaseIcon'

const Wrapper = styled(FormControl)`
  display: grid;
  gap: 5px;
`
const CustomFormControlLabel = styled(FormControlLabel)`
  margin-left: 0;
  margin-right: 0;
`
const CustomCheckBox = styled(Checkbox)`
  min-height: 38px;
  min-width: 38px;
  padding: 5px;
`

export interface InputCheckboxDisclosureProps {
  checkboxLabel: string | ReactJSXElement
  disabled?: boolean
  size?: 'small' | 'medium'
  value: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  icon?: JSX.Element
  checkedIcon?: JSX.Element
  scrollId?: string
  // NOTE:ラベル系
  label?: string
  annotation?: string
  isRequired?: boolean
  isOptioned?: boolean
}

export const InputCheckboxDisclosure: React.FC<
  InputCheckboxDisclosureProps
> = ({
  checkboxLabel = '',
  disabled = false,
  size = 'small',
  scrollId,
  onChange,
  value = false,
  label = '',
  annotation,
  isRequired = false,
  isOptioned = false,
  icon = (
    <SquareIcon content="" size={size} disabled={disabled} className="-white" />
  ),
  checkedIcon = (
    <SquareIcon
      content={<CheckIcon fontSize="small" color="base" />}
      size={size}
      disabled={disabled}
      className="-orange"
    />
  )
}) => {
  return (
    <Wrapper id={scrollId}>
      <BaseInputLabel
        label={label}
        annotation={annotation}
        isRequired={isRequired}
        isOptioned={isOptioned}
      />
      <CustomFormControlLabel
        control={
          <CustomCheckBox
            disabled={disabled}
            checked={value}
            size={size}
            icon={icon}
            checkedIcon={checkedIcon}
            onChange={onChange}
          />
        }
        label={checkboxLabel}
      />
    </Wrapper>
  )
}
