import { styled } from '@mui/material/styles'
import { InputCheckboxDisclosure, Button, Table } from '@/components/uis'
import { BaseButtonWrapper, BaseTitle } from '@/functions/themes'

const GapWrapper = styled('div')`
  display: grid;
  gap: 20px;
  padding: 20px;
`

type ContactConfirmProps = {
  next: () => void
  back: () => void
}

const options = [
  { value: 'a', label: 'Aサービスについて' },
  { value: 'b', label: 'Bサービスについて' },
  { value: 'c', label: 'Cサービスについて' },
  { value: 'd', label: 'その他' }
]

export const ContactConfirm: React.FC<ContactConfirmProps> = ({
  next,
  back
}) => {
  return (
    <GapWrapper>
      <BaseTitle>confirm</BaseTitle>

      <Table options={options} />

      <InputCheckboxDisclosure
        onChange={() => null}
        value
        checkboxLabel="個人情報の保持の同意"
        disabled
      />
      <BaseButtonWrapper className="-sp-reverse">
        <Button variant="outlined" width="half" onClick={back}>
          戻る
        </Button>
        <Button width="half" onClick={next}>
          送信する
        </Button>
      </BaseButtonWrapper>
    </GapWrapper>
  )
}
