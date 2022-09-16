import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AllOrders from '../AllOrders/AllOrders';
import UserOrders from '../UserOrders/UserOrders';

const drawerWidth = 240;


function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {isAdmin, logout} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item header-link-hover" >
          <Link style={{textDecoration:'none'}} to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        
        {
            isAdmin ? 
            <div>
                <li className="nav-item header-link-hover">
                    <Link to="/manageAllOrders" className="nav-link active" aria-current="page" >Manage all orders</Link>
                </li>

                <li className="nav-item header-link-hover">
                    <Link to="/addAdmin" className="nav-link active" aria-current="page" >Add admin</Link>
                </li>

                <li className="nav-item header-link-hover">
                    <Link to="/addProduct" className="nav-link active" aria-current="page" >Add a product</Link>
                </li>

                <li className="nav-item header-link-hover">
                    <Link to="/manageProducts" className="nav-link active" aria-current="page" >Manage Products</Link>
                </li>   
            </div>
            :
            <div>

                <li className="nav-item header-link-hover">
                    <Link to="/userOrders" className="nav-link active" aria-current="page" >My orders</Link>
                </li>

                <li className="nav-item header-link-hover">
                    <Link to="/review" className="nav-link active" aria-current="page" >Review</Link>
                </li>

                <li className="nav-item header-link-hover">
                    <Link to="/payment" className="nav-link active" aria-current="page" >Payment</Link>
                </li>
            </div>
        }

                <button onClick={logout} className="btn btn-outline-danger" >Logout</button>
      </ul>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {
                isAdmin ? 'Admin Dashboard' : 'User Dashboard'
            }
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {
            isAdmin ? <AllOrders></AllOrders> : <UserOrders></UserOrders>
        }
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;