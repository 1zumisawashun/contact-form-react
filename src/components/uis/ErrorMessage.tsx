import { Panel } from '@/components/uis'
import { BaseText } from '@/functions/themes'

export type ErrorMessageProps = {
  message?: string | null
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Panel color="danger">
      <BaseText className="-danger">{message}</BaseText>
    </Panel>
  )
}
