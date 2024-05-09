import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
    username:Yup.string().min(3).required('username is required'),
    password: Yup.string().min(5).matches(/^[a-zA-Z]{5,}$/, 'en az 1 kicik bir bouk herf olmalidir ve min 5 simvol olmalidir').required('password is required'),
    email: Yup.string().email('email is required').required('email is required'),
    profileImg: Yup.string().url().required('foto is required'),
    balance: Yup.number().positive().min(50, 'minumum 50 azn olmalidir').integer().required('balance is required')
})
export default UserSchema