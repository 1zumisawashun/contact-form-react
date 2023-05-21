import { Option } from '@/functions/types/Common'

export const useSlack = () => {
  const url = import.meta.env.VITE_SLACK_WEBHOOK_URL_CONTACT

  const slackContent = (options: Option[]) => {
    const blocks = options.map((option) => {
      return {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*${option.label}*\n${option.value}`
        }
      }
    })
    return { blocks }
  }

  const handleSlack = (options: Option[]) => {
    if (!url) return
    fetch(url, {
      method: 'POST',
      headers: undefined,
      body: JSON.stringify(slackContent(options))
    })
  }

  return { handleSlack }
}
