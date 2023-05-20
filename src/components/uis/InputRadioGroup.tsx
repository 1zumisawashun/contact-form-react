import { BaseSyntheticEvent } from 'react'
import MuiCircleIcon from '@mui/icons-material/Circle'
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Controller, Control, UseFormRegisterReturn } from 'react-hook-form'
import { Option } from '@/functions/types/Common'
import { BaseInputLabel } from './BaseInputLabel'
import { CircleIcon } from './BaseIcon'

const Wrapper = styled(FormControl)`
  display: grid;
  gap: 5px;
`

export type InputRadioGroupProps = {
  // NOTE:アクション
  onChange?: (e: BaseSyntheticEvent) => void // RFCを使わない場合に必要
  // NOTE:react-hook-form
  control?: Control<any>
  name?: any
  register?: UseFormRegisterReturn
  // NOTE:custom icon
  icon?: JSX.Element
  checkedIcon?: JSX.Element
  id?: string
  type?: 'row' | 'twoRow' | 'column'
  size?: 'small' | 'medium'
  options: Option[]
  value?: string
  disabled?: boolean
  scrollId?: string
  // NOTE:ラベル系
  label?: string
  annotation?: string
  isRequired?: boolean
  isOptioned?: boolean
}

export const InputRadioGroup: React.FC<InputRadioGroupProps> = ({
  onChange,
  id,
  scrollId,
  value,
  type = 'column',
  size = 'small',
  options,
  control,
  name,
  disabled = false,
  register,
  label = '',
  annotation,
  isRequired = false,
  isOptioned = false,
  icon = <CircleIcon content="" size={size} disabled={disabled} />,
  checkedIcon = (
    <CircleIcon
      content={
        <MuiCircleIcon
          color={disabled ? 'inherit' : 'point'}
          fontSize="small"
        />
      }
      size={size}
      disabled={disabled}
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

      {control ? (
        // react-hook-formを使用する場合
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              <RadioGroup
                row={type === 'row'}
                aria-labelledby={id}
                name="radio-buttons-group"
                sx={{ justifyContent: type === 'twoRow' ? 'space-around' : '' }}
                defaultValue={field.value}
              >
                {options.map((radio) => {
                  return (
                    <FormControlLabel
                      key={radio.value}
                      label={radio.label}
                      control={
                        <Radio
                          size={size}
                          value={radio.value}
                          icon={icon}
                          {...register}
                          checkedIcon={checkedIcon}
                          disabled={disabled}
                        />
                      }
                    />
                  )
                })}
              </RadioGroup>
            )
          }}
        />
      ) : (
        // NOTE:react-hook-formを使用しない場合
        <RadioGroup
          row={type === 'row'}
          aria-labelledby={id}
          name="radio-buttons-group"
          sx={{ justifyContent: type === 'twoRow' ? 'space-around' : '' }}
          defaultValue={value}
        >
          {options.map((radio) => {
            return (
              <FormControlLabel
                key={radio.value}
                label={radio.label}
                control={
                  <Radio
                    size={size}
                    value={radio.value}
                    icon={icon}
                    checkedIcon={checkedIcon}
                    disabled={disabled}
                    onChange={onChange}
                  />
                }
              />
            )
          })}
        </RadioGroup>
      )}
    </Wrapper>
  )
}
