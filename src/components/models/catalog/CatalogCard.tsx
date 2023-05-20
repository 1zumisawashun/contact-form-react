import { styled } from '@mui/material/styles'
import { ReactNode } from 'react'
import { Panel } from '@/components/uis'
import { BasePanelInner } from '@/functions/themes'

const CustomPanel = styled(Panel)`
  position: relative;
`
const Title = styled('p')`
  background-color: white;
  font-size: 1.25rem;
  font-weight: bold;
  left: 16px;
  padding: 0 8px;
  position: absolute;
  top: -16px;
`

type CatalogCardProps = {
  title: string
  children: ReactNode
}

export const CatalogCard: React.FC<CatalogCardProps> = ({
  title,
  children
}) => {
  return (
    <CustomPanel>
      <Title>{title}</Title>
      <BasePanelInner>{children}</BasePanelInner>
    </CustomPanel>
  )
}
