import { styled } from '@mui/material/styles'
import { useErrorBoundary } from 'react-error-boundary'
import { InputCheckboxDisclosure, Button, Table } from '@/components/uis'
import { BaseButtonWrapper, BaseTitle } from '@/functions/themes'
import { Option } from '@/functions/types/Common'

const GapWrapper = styled('div')`
  display: grid;
  gap: 20px;
  padding: 20px;
`

type ContactConfirmProps = {
  next: () => void
  back: () => void
  options: Option[]
}

export const ContactConfirm: React.FC<ContactConfirmProps> = ({
  next,
  back,
  options
}) => {
  const { showBoundary } = useErrorBoundary()

  const handleSubmit = () => {
    try {
      // NOTE:ここでAPIを叩く
      next()
    } catch (error) {
      // NOTE:activeStep0からやり直しさせたくない場合はshowBoundaryではなくモーダルなどで対応する
      showBoundary(new Error('bomb!'))
    }
  }

  return (
    <GapWrapper>
      <BaseTitle>お問い合わせ確認画面</BaseTitle>

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
        <Button width="half" onClick={handleSubmit}>
          送信する
        </Button>
      </BaseButtonWrapper>
    </GapWrapper>
  )
}
