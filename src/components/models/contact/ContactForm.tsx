import { styled } from '@mui/material/styles'
import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { useMemo } from 'react'
import {
  InputText,
  InputTextarea,
  InputCheckboxDisclosure,
  InputRadioGroup,
  Button,
  Panel
} from '@/components/uis'
import { useDisclosure } from '@/functions/hooks'
import { BaseButtonWrapper, BaseTitle } from '@/functions/themes'
import { ContactSchema } from '@/functions/hooks/useContact'
import { ContactFormSchema } from '@/functions/helpers'

const GapWrapper = styled('div')`
  display: grid;
  gap: 20px;
  padding: 20px;
`

const options = [
  { value: 'a', label: 'Aサービスについて' },
  { value: 'b', label: 'Bサービスについて' },
  { value: 'c', label: 'Cサービスについて' },
  { value: 'd', label: 'その他' }
]

type ContactFormProps = {
  next: () => void
  stateUp?: ContactSchema
  handleStateUp: (params: ContactSchema) => void
}

export const ContactForm: React.FC<ContactFormProps> = ({
  next,
  stateUp,
  handleStateUp
}) => {
  const agreeDisclosure = useDisclosure()

  const defaultValues = useMemo(() => {
    return {
      name: stateUp?.name || '',
      name_kana: stateUp?.name_kana || '',
      company_name: stateUp?.company_name || '',
      email: stateUp?.email || '',
      zipcode: stateUp?.zipcode || '',
      address: stateUp?.address || '',
      tel: stateUp?.tel || '',
      contact_product: stateUp?.contact_product || '',
      contact_title: stateUp?.contact_title || '',
      contact_content: stateUp?.contact_content || ''
    }
  }, [stateUp])

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<ContactSchema>({
    mode: 'onChange',
    shouldFocusError: false,
    resolver: yupResolver(ContactFormSchema),
    defaultValues
  })

  const onSubmit: SubmitHandler<ContactSchema> = async (data) => {
    try {
      console.log(data)
      handleStateUp(data)
      next()
    } catch (error) {
      console.log(error)
    }
  }

  const onError: SubmitErrorHandler<ContactSchema> = (errors) => {
    console.log(errors)
  }

  return (
    <GapWrapper>
      <BaseTitle>form</BaseTitle>

      <InputText
        label="名前(姓名)"
        annotation=""
        isRequired
        name="name"
        control={control}
        error={'name' in errors}
        helperText={errors.name?.message}
        scrollId="name"
      />
      <InputText
        label="ふりがな(姓名)"
        annotation=""
        isRequired
        name="name_kana"
        control={control}
        error={'name_kana' in errors}
        helperText={errors.name_kana?.message}
        scrollId="name_kana"
      />
      <InputText
        label="社名"
        annotation=""
        isOptioned
        name="company_name"
        control={control}
        error={'company_name' in errors}
        helperText={errors.company_name?.message}
        scrollId="company_name"
      />
      <InputText
        label="メールアドレス"
        annotation=""
        isRequired
        name="email"
        control={control}
        error={'email' in errors}
        helperText={errors.email?.message}
        scrollId="email"
      />
      <InputText
        label="郵便番号"
        annotation="ハイフンなしで入力してください。"
        isOptioned
        name="zipcode"
        control={control}
        error={'zipcode' in errors}
        helperText={errors.zipcode?.message}
        scrollId="zipcode"
      />
      <InputText
        label="住所"
        annotation=""
        isOptioned
        name="address"
        control={control}
        error={'address' in errors}
        helperText={errors.address?.message}
        scrollId="address"
      />
      <InputText
        label="電話番号"
        annotation="ハイフンなしで入力してください。"
        isOptioned
        name="tel"
        control={control}
        error={'tel' in errors}
        helperText={errors.tel?.message}
        scrollId="tel"
      />
      <InputRadioGroup
        options={options}
        label="どの製品について"
        annotation=""
        isOptioned
        name="contact_product"
        control={control}
        scrollId="contact_product"
      />
      <InputText
        label="問い合わせ件名"
        annotation=""
        isRequired
        name="contact_title"
        control={control}
        error={'contact_title' in errors}
        helperText={errors.contact_title?.message}
        scrollId="contact_title"
      />
      <InputTextarea
        label="問い合わせ内容"
        annotation=""
        isRequired
        name="contact_content"
        control={control}
        error={'contact_content' in errors}
        helperText={errors.contact_content?.message}
        scrollId="contact_content"
      />

      <Panel color="negative" hideBorder>
        <InputCheckboxDisclosure
          label="個人情報の保持の同意"
          isRequired
          onChange={agreeDisclosure.toggle}
          value={agreeDisclosure.isOpen}
          checkboxLabel="個人情報の保持の同意"
        />
      </Panel>

      <BaseButtonWrapper className="-sp-reverse">
        <Button variant="outlined" width="half">
          戻る
        </Button>
        <Button
          width="half"
          onClick={handleSubmit(onSubmit, onError)}
          disabled={!agreeDisclosure.isOpen}
        >
          確認画面に進む
        </Button>
      </BaseButtonWrapper>

      <DevTool control={control} />
    </GapWrapper>
  )
}
