import { styled } from '@mui/material/styles'
import { Button } from '@/components/uis'
import { BaseButtonWrapper, BaseTitle } from '@/functions/themes'

const GapWrapper = styled('div')`
  display: grid;
  gap: 20px;
  padding: 20px;
`

export const ContactComplete: React.FC = () => {
  return (
    <GapWrapper>
      <BaseTitle>complete</BaseTitle>
      <BaseButtonWrapper>
        <Button>ホーム画面に戻る</Button>
      </BaseButtonWrapper>
    </GapWrapper>
  )
}
