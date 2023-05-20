import styled from '@emotion/styled'
import { FallbackProps } from 'react-error-boundary'
import { BaseButton } from './BaseButton'
import { useNavigate } from '@/functions/hooks'
import { BaseTitle, BaseText, BaseButtonWrapper } from '@/functions/themes'

type CustomButtonProps = {
  onClick: () => void
  className?: string
}

const ContentWrapper = styled('div')`
  align-items: center;
  background: rgba(74, 74, 74, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  min-height: 100vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
`
const Content = styled('div')`
  background-color: white;
  border-radius: 10px;
  display: grid;
  max-width: 1100px;
  padding: 60px;
  row-gap: 30px;
`

const CustomButton = styled(BaseButton)<CustomButtonProps>`
  &.-outlined {
    background-color: white;
    border: 1.5px solid #f58802;
    color: #f58802;
  }
`

export const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary
}) => {
  const { navigate } = useNavigate()

  return (
    <ContentWrapper>
      <Content>
        <BaseTitle>エラーが発生しました</BaseTitle>

        <BaseText>
          以下の原因が考えられます。
          <br />
          1.URLが間違っているか、古い
          <br />
          2.権限が与えられていない操作
        </BaseText>

        <BaseText>
          ご不便をおかけしますが、アドレスをご確認いただくか、
          <br />
          トップ画面へ戻り本サービスをご利用ください。
        </BaseText>

        <BaseButtonWrapper>
          <CustomButton
            onClick={() => navigate('/')}
            width="quarter"
            className="-outlined"
          >
            トップページへ戻る
          </CustomButton>
          {resetErrorBoundary && (
            <CustomButton onClick={resetErrorBoundary} width="quarter">
              もう一度試す
            </CustomButton>
          )}
        </BaseButtonWrapper>
      </Content>
    </ContentWrapper>
  )
}
