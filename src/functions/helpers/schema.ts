import * as yup from 'yup'

export const BaseContactSchema = yup.object().shape({
  name: yup.string().required('名前(姓名)を入力してください。'),
  name_kana: yup.string().required('ふりがな(姓名)を入力してください。'),
  company_name: yup.string().required('社名を入力してください。'),
  email: yup
    .string()
    .email('メールアドレスの形式で入力してください。')
    .required('メールアドレスを入力してください。'),
  zipcode: yup.string().required('郵便番号を入力してください。'),
  address: yup.string().required('住所を入力してください。'),
  tel: yup.string().required('電話番号を入力してください。'),
  contact_product: yup.string().required('製品を選択してしてください。'),
  contact_title: yup.string().required('問い合わせ件名を入力してください。'),
  contact_content: yup.string().required('問い合わせ内容を入力してください。')
})

// NOTE:必須のみ抽出する
export const ContactFormSchema = BaseContactSchema.pick([
  'name',
  'name_kana',
  'email',
  'contact_title',
  'contact_content'
])
