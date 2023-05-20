import { Fragment } from 'react'
import { styled } from '@mui/material/styles'
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

type FormattedOptions = Option & { id: string }

export const Table: React.FC<TableProps> = ({ options, row = 1 }) => {
  const formattedOptions: FormattedOptions[][] = options.reduce(
    (acc: any, val, index) => {
      const last = acc[acc.length - 1]
      if (last.length === row) {
        acc.push([{ id: `table_${index + 1}`, ...val }])
        return acc
      }
      last.push({ id: `table_${index + 1}`, ...val })
      return acc
    },
    [[]]
  )

  /* eslint-disable react/no-array-index-key */
  return (
    <StyledTable>
      <tbody>
        {formattedOptions.map((formattedOption, index) => {
          return (
            <tr key={index}>
              {formattedOption.map((option) => {
                return (
                  <Fragment key={option.id}>
                    <Th>{option.label}</Th>
                    <Td>{option.value}</Td>
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
