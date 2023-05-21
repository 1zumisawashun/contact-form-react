import * as yup from 'yup'

// NOTE: arrow functionを使うとthisを上書きされるので使わない
function onlyNumberValidation(this: any) {
  return this.test(
    'onlyNumber',
    '半角数字で入力してください。',
    (el: string) => !el || /^[0-9]+$/.test(el)
  )
}

yup.addMethod(yup.string, 'onlyNumber', onlyNumberValidation)

export const validator = yup
