import { styled } from '@mui/material/styles'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { Button, PrintObject } from '@/components/uis'
import { BaseButtonWrapper, BaseTitle, BaseText } from '@/functions/themes'
import { ContactSchema } from '@/functions/hooks/useContact'

const GapWrapper = styled('div')`
  display: grid;
  gap: 20px;
  padding: 20px;
`
const CustomIcon = styled(CheckCircleOutlineIcon)`
  margin: auto;
  font-size: 3rem;
  margin-bottom: -10px;
`
type ContactCompleteProps = {
  stateUp?: ContactSchema
}

export const ContactComplete: React.FC<ContactCompleteProps> = ({
  stateUp
}) => {
  return (
    <GapWrapper>
      <BaseTitle>お問い合わせ完了画面</BaseTitle>

      <CustomIcon color="success" />
      <BaseText className="-success -bold -center">
        お問い合わせが完了しました。
      </BaseText>

      <PrintObject content={stateUp!} />

      <BaseButtonWrapper>
        <Button tag="a" href="/" width="quarter">
          ホーム画面に戻る
        </Button>
      </BaseButtonWrapper>
    </GapWrapper>
  )
}
