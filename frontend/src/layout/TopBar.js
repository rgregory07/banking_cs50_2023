// import React, { useContext, useState } from 'react'
// import { AppBar, Box, Button, Container, Toolbar, IconButton, Menu, MenuItem, Tooltip, Typography} from '@mui/material'
// import { ColorModeContext, tokens } from '../theme-old'
// import {InputBase} from '@mui/material'
// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
// import MenuIcon from '@mui/icons-material/Menu'
// import AdbIcon from '@mui/icons-material/Adb'
// import { Link } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid';

// // const pages = ['Profile', 'Logout'];
// const settings = ['Profile','Logout'];

// const TopBar = () => {
//     const [anchorElNav, setAnchorElNav] = useState(null);
//     const [anchorElUser, setAnchorElUser] = useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//       };

//       const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//       };

//   return (
//     <div className="flex space-between topbar-container">

//         <Box display="flex" ml='auto' >
//                 <IconButton onClick={handleOpenUserMenu}>
//                     <PersonOutlinedIcon sx={{color: 'white'}}/>
//                 </IconButton>
//             <Menu

//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}

//             >
//               {settings.map((setting, index) => (
//                 <Link key={index} to={`/${setting}`} style={{ textDecoration: 'none', color: 'inherit'}}>
//                 <MenuItem key={index} onClick={handleCloseUserMenu} >
//                   <Typography key={index} textAlign="center" >{setting}</Typography>
//                 </MenuItem>
//                 </Link>
//               ))}
//             </Menu>
//         </Box>

//     </div>

//   )
// }

// export default TopBar
