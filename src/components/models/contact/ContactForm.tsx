import { styled } from '@mui/material/styles'
import { useState, BaseSyntheticEvent } from 'react'
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
}

export const ContactForm: React.FC<ContactFormProps> = ({ next }) => {
  const [radio, setRadio] = useState<string>('')

  const inputCheckboxDisclosure = useDisclosure()

  const handleRadio = (e: BaseSyntheticEvent) => {
    setRadio(e.target.value)
  }

  return (
    <GapWrapper>
      <BaseTitle>form</BaseTitle>

      <InputText label="名前(姓名)" annotation="" isRequired />
      <InputText label="ふりがな(姓名)" annotation="" isRequired />
      <InputText label="社名" annotation="" isOptioned />
      <InputText label="メールアドレス" annotation="" isRequired />
      <InputText label="郵便番号" annotation="" isOptioned />
      <InputText label="住所" annotation="" isOptioned />
      <InputText label="電話番号" annotation="" isOptioned />
      <InputRadioGroup
        options={options}
        label="どの製品について"
        name="default"
        value={radio}
        onChange={(e) => handleRadio(e)}
        isOptioned
      />
      <InputText label="問い合わせ件名 " annotation="" isRequired />
      <InputTextarea label="問い合わせ内容 " annotation="" isRequired />

      <Panel color="negative" hideBorder>
        <InputCheckboxDisclosure
          label="個人情報の保持の同意"
          isRequired
          onChange={inputCheckboxDisclosure.toggle}
          value={inputCheckboxDisclosure.isOpen}
          checkboxLabel="個人情報の保持の同意"
        />
      </Panel>

      <BaseButtonWrapper className="-sp-reverse">
        <Button variant="outlined" width="half">
          戻る
        </Button>
        <Button width="half" onClick={next}>
          確認画面に進む
        </Button>
      </BaseButtonWrapper>
    </GapWrapper>
  )
}
