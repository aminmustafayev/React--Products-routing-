
import { Input } from 'antd';
import { Button } from "@mui/material";
import { useFormik } from 'formik';
import UserSchema from "../../../validations/users.validation";
import {endpoints} from '../../../services/base'
import { useNavigate, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import Users from '../../../classes/usersclass';
import controller from '../../../services';

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email:'',
      profileImg:'',
      balance:'',
    },
    onSubmit: values => {
      const newUser= new Users(values.username, values.password, values.email,values.profileImg,values.balance)
      controller.post(endpoints.users,newUser)
      toast.success("Admin logged in!",{
        autoClose: 1500
      })
      setTimeout(() => {
        navigate('/login');
      }, 1500);

    },
    validationSchema: UserSchema
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit} 
      style={{width:'30%', margin:"30px auto"}}>
      <h1 style={{textAlign:'center', color:"red", marginBottom:'15px'}}>Register</h1>
      <div style={{display:"flex", flexDirection:"column" ,gap:"20px"}}>
      <Input 
      placeholder="User-Name"
      value={formik.values.username}
          name="username"
          onChange={formik.handleChange}
          id="outlined-basic"
          type="text"
          label="admin username"
          variant="outlined"
      />
       {formik.errors.username && <span style={{color:'red'}}>{formik.errors.username}</span>}
       <Input 
      placeholder="email"
      value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          id="email"
          type="email"
          label="email"
          variant="outlined"
      />
       {formik.errors.email && <span style={{color:'red'}}>{formik.errors.email}</span>}

      <Input 
      placeholder="ProfileImg" 
      name="profileImg"
      id="profileImg"
      type="url"
      onChange={formik.handleChange}
      value={formik.values.profileImg}
      />
       {formik.errors.profileImg && <span style={{color:'red'}}>{formik.errors.profileImg}</span>}
      <Input 
      placeholder="Balance" 
      name="balance"
      id="balance"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.balance}
      />
       {formik.errors.balance && <span style={{color:'red'}}>{formik.errors.balance}</span>}
       
       <Input 
      placeholder="password"
      value={formik.values.password}
          name="password"
          onChange={formik.handleChange}
          id="password"
          type="password"
      />
       {formik.errors.password && <span style={{color:'red'}}>{formik.errors.password}</span>}
      </div>
      <div style={{marginTop:'10px'}}>
       <Button type="submit" variant="contained" color="success">
         Register
        </Button>
       </div>
      </form>
    </>
  )
}

export default Register