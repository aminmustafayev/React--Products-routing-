import { Input } from 'antd';
import { Button } from "@mui/material";
import { useFormik } from 'formik';
import AdminSchema from "../../../validations/adminlogin.validation/";
import { useNavigate, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
  const [users, setAdminID, setLocalAdminID] = useOutletContext();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {
     
      const foundAdmin = users.find(
        (x) =>
          x.username == values.username &&
          x.password == values.password &&
          x.role == "admin"
      );
      if (foundAdmin) {
        setAdminID(foundAdmin.id);
        setLocalAdminID(foundAdmin.id);
        toast.success("Admin logged in!",{
          autoClose: 1500
        })
        setTimeout(() => {
          navigate('/admin');
        }, 1500);
      } else {
        toast.error("username or password is incorrect!");
        values.username = '';
        values.password = '';
      }
    },
    validationSchema: AdminSchema
  })





  return (
    <>
    <form onSubmit={formik.handleSubmit} style={{width:"20%", margin:"180px auto",}}>
    <h1 style={{textAlign:'center', color:"red", marginBottom:'15px'}}>Login</h1>
    <div style={{ with:10, display:"flex", flexDirection:"column" ,gap:"20px"}}>
         <Input  value={formik.values.username}
          name="username"
          onChange={formik.handleChange}
          id="outlined-basic"
          type="text"
          label="admin username"
          variant="outlined" />
            {formik.errors.username && <span style={{color:'red'}}>{formik.errors.username}</span>}
          <Input.Password 
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          id="outlined-basic"
          type="password"
          label="admin password"
          variant="outlined"/>
           {formik.errors.password && <span style={{color:'red'}}>{formik.errors.password}</span>}
        </div>
        <div style={{marginTop:'10px'}}>
       <Button type="submit" variant="contained" color="success">
         Login
        </Button>
       </div>

    </form>
    </>
  )
}

export default Login