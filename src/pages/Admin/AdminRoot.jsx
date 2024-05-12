import NavbarAdmin from '../../components/Admin/NavbarAdmin'
import {Outlet, useNavigate} from 'react-router-dom'
import controller from '../../services';
import { endpoints } from "../../services/base.js";
import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import { useEffect } from 'react';

const AdminRoot = () => {
  const [users, setUsers] = useState([]);
  const[localAdminID, setLocalAdminID] = useLocalStorage('adminID', null);
  // cosnt[localSuperAdminID, setSuperAdminID] =useState('superadmin', null)
  const navigate = useNavigate();
  const localID = JSON.parse(localStorage.getItem('adminID'));
  const [adminID, setAdminID] = useState(localID ? localID : null);
  // const localSuperID = JSON.parse(localStorage.getItem('superadminID'))
  // const [superAdminID, setSuperAdminID]= useState(localSuperID ? localSuperID : null)


  useEffect(() => {
    controller.getAll(endpoints.users).then((resp) => {
      setUsers(resp.data);
    });
    if (adminID===null) {
      navigate('/admin/login');
    }

  }, [adminID]);
  return ( 
 <>
 <NavbarAdmin/> 
 <Outlet context={[users, setAdminID, setLocalAdminID]} />
 </>
  )
}

export default AdminRoot