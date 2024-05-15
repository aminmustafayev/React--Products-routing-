import NavbarClient from '../../components/Client/NavbarClient'
import { Outlet,useNavigate } from "react-router-dom"
import controller from '../../services';
import { endpoints } from "../../services/base.js";
import { useState,useEffect  } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage.js';



const ClientRoot = () => {
  const [users, setUsers] = useState([]);
  const[localUserID, setLocalUserID] = useLocalStorage('userID', null);
  const navigate = useNavigate();
  const localID = JSON.parse(localStorage.getItem('userID'));
  const [userID, setUserID] = useState(localID ? localID : null);

  useEffect(() => {
    controller.getAll(endpoints.users).then((res) => {
      setUsers(res.data);
    })
    if (userID===null) {
      navigate('/login');
    }
  }, [userID]);
  return (
  <>
  <NavbarClient/>
  <Outlet context={[users, setUserID, setLocalUserID]}/>
  </>
  )
}

export default ClientRoot