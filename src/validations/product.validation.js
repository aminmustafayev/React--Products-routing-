import * as Yup from 'yup';

const ProductSchema =Yup.object().shape({
        name: Yup.string().required('name is required'),
        salePrice: Yup.number('yalnir reqem').required('minimum 0 yaza bilersen').min(0),
        costPrice: Yup.number().required('minimum 0 yaza bilersen').min(0),
        imgSrc: Yup.string().url('url olmalidir').required('img is required'),
        discountPercentage: Yup.number().min(0).max(100).required('0 100 araliqinda olmalidir'),
        description: Yup.string().min(10).required('doldur bos buraxma'),
        categoryId: Yup.string().required(),
        stockCount: Yup.number().required('reqem daxil et').min(1)
      });
      
      export default ProductSchema;
