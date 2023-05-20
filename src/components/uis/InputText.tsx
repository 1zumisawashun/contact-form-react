import { BaseSyntheticEvent } from 'react'
import { styled } from '@mui/material/styles'
import { Controller, Control } from 'react-hook-form'
import { Width } from '@/functions/types/Common'
import { BaseInputLabel } from './BaseInputLabel'
import { BaseInputText } from './BaseInputText'

const Wrapper = styled('div')`
  display: grid;
  gap: 5px;
  width: 100%;
`
const FormWrapper = styled('div')`
  align-items: baseline;
  display: flex;
  gap: 10px;
`

export interface InputTextProps {
  // NOTE:ハンドラー系
  onChange?: (e: BaseSyntheticEvent) => void
  onKeyDown?: (e: BaseSyntheticEvent) => void
  onBlur?: (e: BaseSyntheticEvent) => void
  onFocus?: (e: BaseSyntheticEvent) => void
  // NOTE:エラー系（react-hook-form）
  error?: boolean
  helperText?: string
  name?: any
  control?: Control<any>
  // NOTE:必須項目
  scrollId?: string
  value?: string | number
  disabled?: boolean
  placeholder?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'
  variant?: 'filled' | 'outlined' | 'standard'
  size?: 'small'
  //NOTE:追加項目
  autoFocus?: boolean
  maxLength?: number
  inputRef?: React.RefObject<HTMLInputElement>
  readOnly?: boolean
  width?: Width
  // NOTE:ラベル系
  label?: string
  annotation?: string
  isRequired?: boolean
  isOptioned?: boolean
}

export const InputText: React.FC<InputTextProps> = ({
  onChange,
  onKeyDown,
  onBlur,
  onFocus,
  control,
  error = false,
  helperText = '',
  label,
  scrollId,
  value,
  disabled = false,
  placeholder,
  type = 'text',
  autoFocus = false,
  name,
  maxLength = 255,
  inputRef = null,
  size,
  width = 'full',
  annotation,
  isRequired = false,
  isOptioned = false,
  readOnly = false,
  variant = 'outlined'
}) => {
  return (
    <Wrapper id={scrollId}>
      <BaseInputLabel
        label={label}
        annotation={annotation}
        isRequired={isRequired}
        isOptioned={isOptioned}
      />
      <FormWrapper>
        {control ? (
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <BaseInputText
                {...field}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                onFocus={onFocus}
                type={type}
                name={name}
                disabled={disabled}
                autoFocus={autoFocus}
                placeholder={placeholder}
                value={value}
                error={error}
                helperText={helperText}
                inputRef={inputRef}
                size={size}
                variant={variant}
                width={width}
                inputProps={{
                  maxLength,
                  readOnly
                }}
              />
            )}
          />
        ) : (
          <BaseInputText
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onFocus={onFocus}
            type={type}
            name={name}
            disabled={disabled}
            autoFocus={autoFocus}
            placeholder={placeholder}
            value={value}
            error={error}
            helperText={helperText}
            inputRef={inputRef}
            size={size}
            variant={variant}
            width={width}
            inputProps={{
              maxLength,
              readOnly
            }}
          />
        )}
      </FormWrapper>
    </Wrapper>
  )
}
