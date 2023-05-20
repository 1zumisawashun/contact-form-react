import { useState, useMemo, useCallback } from 'react'
import * as yup from 'yup'
import { BaseContactSchema } from '@/functions/helpers'

export interface ContactSchema
  extends yup.InferType<typeof BaseContactSchema> {}

export const useContact = () => {
  const [stateUp, setStateUp] = useState<ContactSchema>()

  const handleStateUp = useCallback((params: ContactSchema) => {
    setStateUp(params)
  }, [])

  const formattedOptions = useMemo(() => {
    return [
      {
        value: stateUp?.name || '-',
        label: '名前(姓名)'
      },
      {
        value: stateUp?.name_kana || '-',
        label: 'ふりがな(姓名)'
      },
      {
        value: stateUp?.company_name || '-',
        label: '社名'
      },
      {
        value: stateUp?.email || '-',
        label: 'メールアドレス'
      },
      {
        value: stateUp?.zipcode || '-',
        label: '郵便番号'
      },
      {
        value: stateUp?.address || '-',
        label: '住所'
      },
      {
        value: stateUp?.tel || '-',
        label: '電話番号'
      },
      {
        value: stateUp?.contact_product || '-',
        label: 'どの製品について'
      },
      {
        value: stateUp?.contact_title || '-',
        label: '問い合わせ件名'
      },
      {
        value: stateUp?.contact_content || '-',
        label: '問い合わせ内容'
      }
    ]
  }, [stateUp])

  return {
    stateUp,
    handleStateUp,
    formattedOptions
  }
}
