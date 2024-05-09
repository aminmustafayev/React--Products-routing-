import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{backgroundColor: 'lime'}}>
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
                           Admin
                        </Typography>
                        <Button color="inherit">
                            <Link to={"/admin"}>Login</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to={"/admin/addproduct"}>Add Product</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to={"/admin/addcategories"}>Add Categories</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to={"/admin/categories"}>Categories</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to={"/admin/dashboard"}>Dashboard</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to={"/admin/message"}>Messages</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to={"/admin/orders"}>Oders</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to={"/admin/product"}>Products</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to={"/admin/users"}>Users</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default NavbarAdmin