import {
  ContactForm,
  ContactComplete,
  ContactConfirm
} from '@/components/models'
import { useActiveStep } from '@/functions/hooks'
import { useContact } from '@/functions/hooks/useContact'

export const Contact: React.FC = () => {
  const { activeStep, back, next } = useActiveStep()
  const { stateUp, handleStateUp, formattedOptions } = useContact()
  return (
    <>
      {activeStep === 0 && (
        <ContactForm
          next={next}
          stateUp={stateUp}
          handleStateUp={handleStateUp}
        />
      )}
      {activeStep === 1 && (
        <ContactConfirm next={next} back={back} options={formattedOptions} />
      )}
      {activeStep === 2 && <ContactComplete />}
    </>
  )
}
