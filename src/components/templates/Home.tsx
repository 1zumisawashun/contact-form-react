import { styled } from '@mui/material/styles'
import { BaseText, BaseTitle } from '@/functions/themes'
import { PanelCard } from '@/components/uis'
import image_contact_complete from '@/assets/image_contact_complete.png'
import image_contact_confirm from '@/assets/image_contact_confirm.png'
import image_contact_form from '@/assets/image_contact_form.png'
import image_slack from '@/assets/image_slack.png'

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
  > li > a {
    color: blue;
  }
`

export const Home: React.FC = () => {
  return (
    <GapWrapper>
      <BaseTitle>ホーム画面</BaseTitle>

      <PanelCard title="プログラム">
        <BaseText>以下リンクを参照してください。</BaseText>
        <UnorderedList>
          <li>
            <a href="https://github.com/1zumisawashun/contact-form-react">
              https://github.com/1zumisawashun/contact-form-react
            </a>
          </li>
        </UnorderedList>
      </PanelCard>

      <PanelCard title="提出したプログラムの動作の確認手順">
        <BaseText>以下リンクを参照してください。</BaseText>
        <UnorderedList>
          <li>
            <a href="https://github.com/1zumisawashun/contact-form-react#installation">
              https://github.com/1zumisawashun/contact-form-react#installation
            </a>
          </li>
        </UnorderedList>

        <BaseText>
          インストール完了後ヘッダーからお問い合わせフォームを確認することができます。以下はお問い合わせの導線画像になります。
        </BaseText>
        <img
          src={image_contact_form}
          alt="image_contact_form"
          width="100%"
          height="auto"
        />
        <img
          src={image_contact_confirm}
          alt="image_contact_form"
          width="100%"
          height="auto"
        />
        <img
          src={image_contact_complete}
          alt="image_contact_form"
          width="100%"
          height="auto"
        />
        <img
          src={image_slack}
          alt="image_contact_form"
          width="100%"
          height="auto"
        />
      </PanelCard>

      <PanelCard title="提出物に対して、コメント">
        <BaseText className="-bold">全体を通して</BaseText>
        <UnorderedList>
          <li>ESLint, commitlintを導入し開発体験を向上させました。</li>
          <li>
            バリデーションに引っ掛かった場合はエラー箇所までオートスクロールさせUXの向上を意識しました。（react-hook-formはエラー箇所へジャンプしかできないため）
          </li>
          <li>
            react-router
            v6.4から導入されたScrollRestorationを使ってMPAと同じ挙動にしUXの向上を意識しました。（SPAの場合、画面遷移時スクロール位置がそのままになってしまうため）
          </li>
          <li>
            送信データを標準出力するだけでなく、slack通知を導入してログを取れるように工夫しました。（slack通知の確認をする際はwebhook
            url生成が必要になるので「slack通知を導入する際に書いた記事」を参照してください）
          </li>
          <li>
            カタログ画面を作成しコンポーネントの可視化できる環境を整えました。（今回の実装においてStroybookの導入はオーバーヘッドになると考えたため）
          </li>
        </UnorderedList>

        <BaseText className="-bold">参考記事</BaseText>
        <UnorderedList>
          <li>
            個人開発用のテンプレート:
            <a href="https://github.com/1zumisawashun/eslint-template">
              https://github.com/1zumisawashun/eslint-template
            </a>
          </li>
          <li>
            ESLintを設定する際に書いた記事:
            <a href="https://zenn.dev/shuuuuuun/articles/127728961f89a0">
              https://zenn.dev/shuuuuuun/articles/127728961f89a0
            </a>
          </li>
          <li>
            slack通知を導入する際に書いた記事:
            <a href="https://zenn.dev/shuuuuuun/articles/36a980f97c4c34">
              https://zenn.dev/shuuuuuun/articles/36a980f97c4c34
            </a>
          </li>
        </UnorderedList>
      </PanelCard>
    </GapWrapper>
  )
}
