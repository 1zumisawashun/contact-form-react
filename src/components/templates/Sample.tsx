import { styled } from '@mui/material/styles'
import { useForm } from 'react-hook-form'
import { BaseTitle } from '@/functions/themes'
import { PanelCard } from '@/components/uis'

const GapWrapper = styled('div')`
  display: grid;
  gap: 20px;
  padding: 20px;
`

export const Sample: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  return (
    <GapWrapper>
      <BaseTitle>react-hook-formの素振り</BaseTitle>

      <PanelCard title="提出物に対して、コメント">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register('firstName')} />
          <input {...register('lastName', { required: true })} />
          {errors.lastName && <p>Last name is required.</p>}
          <input {...register('age', { pattern: /\d+/ })} />
          {errors.age && <p>Please enter number for age.</p>}
          <input type="submit" />
        </form>
      </PanelCard>
    </GapWrapper>
  )
}
