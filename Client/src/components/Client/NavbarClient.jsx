import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const NavbarClient = () => {
  const userId = JSON.parse(localStorage.getItem('userID'))
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button sx={{ display: userId == null ? 'none' : '' }} color="inherit">
              <Link to={'/'}>Home</Link>
            </Button>
            <Button sx={{ display: userId == null ? 'none' : '' }} color="inherit">
              <Link to={'/baket'}>Baket</Link>
            </Button>
            <Button color="inherit">
              <Link to={'/contactus'}>Contactus</Link>
            </Button>
            <Button color="inherit">
              <Link to={'/productdetail'}>Product Detail</Link>
            </Button>
            <Button sx={{ display: userId == null ? 'none' : '' }} color="inherit">
              <Link to={'/products'}>Products</Link>
            </Button>
            <Button sx={{ display: userId == null ? '' : 'none' }} color="inherit">
              <Link to={'/login'}>Login</Link>
            </Button>
            <Button sx={{ display: userId == null ? '' : 'none' }} color="inherit">
              <Link to={'/register'}>Register</Link>
            </Button>
            <Button sx={{ display: userId == null ? 'none' : '' }} color="inherit">
              <Link to={'/user'}>User</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default NavbarClient