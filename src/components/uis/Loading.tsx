import { styled } from '@mui/material/styles'
import { Oval } from 'react-loader-spinner'

const LoadingContainer = styled('div')`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1300;
`
const Backdrop = styled('div')`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  -webkit-tap-highlight-color: transparent;
  top: 0;
  z-index: -1;
`
const Inner = styled('div')`
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <Backdrop>
        <Inner>
          <Oval
            ariaLabel="loading-indicator"
            height={70}
            width={70}
            strokeWidth={3}
            color="#F58802"
            secondaryColor="white"
          />
        </Inner>
      </Backdrop>
    </LoadingContainer>
  )
}
