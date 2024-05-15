import {object, string} from 'yup';


let AdminSchema = object().shape(({
    username: string().required('username is required'),
    password: string().required('password is required')
}))

export default AdminSchema;