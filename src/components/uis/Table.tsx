import { Fragment, useId } from 'react'
import styled from '@emotion/styled'
import { Option } from '@/functions/types/Common'

const StyledTable = styled('table')`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`

const Th = styled('th')`
  background: #ffecbb;
  border: 1px solid #ffecbb;
  font-weight: normal;
  padding: 10px;
  text-align: left;
  vertical-align: middle;
  width: 30%;
`

const Td = styled('td')`
  background: white;
  border: 1px solid #ffecbb;
  padding: 10px;
  vertical-align: middle;
`

type TableProps = {
  options: Option[]
  row?: number
}

export const Table: React.FC<TableProps> = ({ options, row = 1 }) => {
  const id = useId()

  const formattedOptions: Option[][] = options.reduce(
    (acc: any, val) => {
      const last = acc[acc.length - 1]
      if (last.length === row) {
        acc.push([val])
        return acc
      }
      last.push(val)
      return acc
    },
    [[]]
  )
  return (
    <StyledTable>
      <tbody>
        {formattedOptions.map((formattedOption, index) => {
          /* eslint-disable react/no-array-index-key */
          return (
            <tr key={`${id}-${index}`}>
              {formattedOption.map((option) => {
                return (
                  <Fragment key={`${option.label}`}>
                    <Th>{option.label}</Th>
                    <Td>{option?.value || '-'}</Td>
                  </Fragment>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}
