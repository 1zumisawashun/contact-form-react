import { styled } from '@mui/material/styles'
import { BaseText, BaseTitle } from '@/functions/themes'

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
      <BaseTitle>工夫した点</BaseTitle>

      <BaseText className="-bold">react-hook-form</BaseText>
      <UnorderedList>
        <li>バリデエラーに引っ掛かった時はオートスクロールを発火させる</li>
      </UnorderedList>

      <BaseText className="-bold">react-router</BaseText>
      <UnorderedList>
        <li>ScrollRestorationでMPAと同じ挙動にする</li>
        <li>catalogはローカル環境以外では表示させないハンドリングを追加する</li>
      </UnorderedList>

      <BaseText className="-bold">環境構築</BaseText>
      <UnorderedList>
        <li>eslint, commitlintの導入</li>
      </UnorderedList>

      <BaseText className="-bold">その他</BaseText>
      <UnorderedList>
        <li>slackでビジネス側のログとエラーログを取る</li>
        <li>カタログの作成</li>
      </UnorderedList>
    </GapWrapper>
  )
}
