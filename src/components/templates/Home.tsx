import { styled } from '@mui/material/styles'
import { BaseText } from '@/functions/themes'

const GapWrapper = styled('div')`
  display: grid;
  gap: 20px;
  padding: 20px;
`
const UnorderedList = styled('ul')`
  display: grid;
  font-size: 1rem;
  padding: 0 1rem;
  > li {
    list-style: disc;
  }
`

export const Home: React.FC = () => {
  return (
    <GapWrapper>
      <BaseText className="-bold">工夫したポイント</BaseText>
      <UnorderedList>
        <li>バリデエラーに引っ掛かった時はオートスクロールを発火させる</li>
        <li>slackでビジネス側のログとエラーログを取る</li>
        <li>カタログの作成</li>
        <li>eslint, commitlintの導入</li>
      </UnorderedList>
    </GapWrapper>
  )
}
