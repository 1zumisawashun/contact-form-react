import { styled } from '@mui/material/styles'
import { ReactNode } from 'react'

const CatalogContainer = styled('div')`
  background: white;
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 40px;
  padding: 16px;
  padding-bottom: 8px;
  position: relative;
`
const GapWrapper = styled('div')`
  display: grid;
  gap: 20px;
  padding: 20px;
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
    <CatalogContainer>
      <Title>{title}</Title>
      <GapWrapper>{children}</GapWrapper>
    </CatalogContainer>
  )
}
