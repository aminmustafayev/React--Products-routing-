import * as Yup from 'yup';

const CategorySchema =Yup.object().shape({
    name:Yup.string().matches(/^[a-zA-Z]{3,}$/, 'en az 1 kicik bir bouk herf olmalidir ve min 3 simvol olmalidir').required('name is required')
})
export default CategorySchema