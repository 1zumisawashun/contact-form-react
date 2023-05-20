import {
  ContactForm,
  ContactComplete,
  ContactConfirm
} from '@/components/models'
import { useActiveStep } from '@/functions/hooks'

export const Contact: React.FC = () => {
  const { activeStep, back, next } = useActiveStep()
  return (
    <>
      {activeStep === 0 && <ContactForm next={next} />}
      {activeStep === 1 && <ContactConfirm next={next} back={back} />}
      {activeStep === 2 && <ContactComplete />}
    </>
  )
}
