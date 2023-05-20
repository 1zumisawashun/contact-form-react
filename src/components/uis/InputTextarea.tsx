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

export interface InputTextareaProps {
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
  value?: string
  disabled?: boolean
  placeholder?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'
  //NOTE:追加項目
  autoFocus?: boolean
  maxLength?: number
  maxRows?: number
  readOnly?: boolean
  width?: Width
  scrollId?: string
  // NOTE:ラベル系
  label?: string
  annotation?: string
  isRequired?: boolean
  isOptioned?: boolean
}

export const InputTextarea: React.FC<InputTextareaProps> = ({
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
  maxLength = 1000,
  maxRows = 50,
  readOnly,
  name,
  annotation,
  isRequired = false,
  isOptioned = false,
  width = 'full'
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
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <BaseInputText
              {...field}
              id={label}
              error={error}
              helperText={helperText}
              multiline
              rows={4}
              tabIndex={0}
              type={type}
              disabled={disabled}
              autoFocus={autoFocus}
              placeholder={placeholder}
              maxRows={maxRows}
              width={width}
              inputProps={{
                maxLength,
                style: {
                  height: '127px'
                },
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
          error={error}
          helperText={helperText}
          multiline
          rows={4}
          tabIndex={0}
          id={label}
          type={type}
          name={name}
          disabled={disabled}
          autoFocus={autoFocus}
          placeholder={placeholder}
          value={value}
          maxRows={maxRows}
          width={width}
          inputProps={{
            maxLength,
            style: {
              height: '127px'
            },
            readOnly
          }}
        />
      )}
    </Wrapper>
  )
}
