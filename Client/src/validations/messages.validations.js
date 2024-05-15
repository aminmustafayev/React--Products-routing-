import * as Yup from 'yup';

const MessagesSchema = Yup.object().shape({
    fullName: Yup.string().required('full name doldur'),
    email:Yup.string().email().required('emaili duzgun doldur'),
    title: Yup.string().required('doldur bow buraxma'),
    message: Yup.string().min(10, 'minumum 10 simvol yaz')
})
export default MessagesSchema
