import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CallIcon from '@mui/icons-material/Call';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { FormControl, InputLabel, Select } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{height:100, backgroundColor:"whitesmoke" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <ul style={{listStyleType:'none'}}>
         <li> <Typography
            
            
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'TimesNewRoman',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              fontSize:25,
              display:'block',
              
            }}
          >
            Horseoss
          </Typography> </li>
         <li> <Typography
            
            
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'TimesNewRoman',
              fontWeight: 700,
            
              color: 'black',
              textDecoration: 'none',
              fontSize:18,
             
            }}
          >
            Saddle up with Technology
          </Typography></li>
          </ul> 
          
          
          
          <Box sx={{display:{xs:'none',md:'flex'} }}>
            
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >

                 <ul style={{listStyleType:'none',display:'flex'}}>
                <li style={{marginLeft:400}}> <Typography> <CallIcon style={{ display:'inline'}}/> +966 1234567890</Typography></li>
                <li style={{marginLeft:60}}> <Typography>SAR <ArrowDropDownIcon style={{ display:'inline'}}/></Typography></li>
                <li style={{marginLeft:60}}> <Typography>UAE <ArrowDropDownIcon style={{ display:'inline'}}/></Typography></li> 
                <li style={{marginLeft:150, }} ><Button style={{backgroundColor:'green',color:'white', borderRadius:40,height:50}}> <ArrowCircleRightIcon />Login or SignUp</Button> </li>
            </ul>

              </Button>
            
          </Box>
          

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
