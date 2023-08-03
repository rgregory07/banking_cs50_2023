import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import PostAddIcon from '@mui/icons-material/PostAdd'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import DataUsageIcon from '@mui/icons-material/DataUsage'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Link } from 'react-router-dom'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import QueryStatsIcon from '@mui/icons-material/QueryStats'

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export default function MiniDrawer() {
  const theme = useTheme()

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex', backgroundColor: 'var(--clr-main)' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        open={open}
        sx={{ backgroundColor: 'var(--clr-main)' }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <h3>Personal Finance Tracker</h3>
          {/* <TopBar /> */}
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to={'/'} className='sidebar-link'>
            <ListItem key='Dashboard' disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: 'var(--clr-main-light)',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary='Dashboard'
                  sx={{ opacity: open ? 1 : 0, color: 'var(--clr-main)' }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />

        <List>
          <Link to={'/bankdata'} className='sidebar-link'>
            <ListItem key='Bank Data' disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: 'var(--clr-main-light)',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText
                  primary='Bank Data'
                  sx={{ opacity: open ? 1 : 0, color: 'var(--clr-main)' }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'/manual-entry'} className='sidebar-link'>
            <ListItem
              key='Manual Entry'
              disablePadding
              sx={{ display: 'block' }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: 'var(--clr-main-light)',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <PostAddIcon />
                </ListItemIcon>
                <ListItemText
                  primary='Manual Entry'
                  sx={{ opacity: open ? 1 : 0, color: 'var(--clr-main)' }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'/upload'} className='sidebar-link'>
            <ListItem
              key='Manual Entry'
              disablePadding
              sx={{ display: 'block' }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: 'var(--clr-main-light)',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <CloudUploadIcon />
                </ListItemIcon>
                <ListItemText
                  primary='Upload'
                  sx={{ opacity: open ? 1 : 0, color: 'var(--clr-main)' }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <Divider />
        <List>
          <Link to={'/income'} className='sidebar-link'>
            <ListItem key='Income' disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: 'var(--clr-main-light)',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <DataUsageIcon />
                </ListItemIcon>
                <ListItemText
                  primary='Income'
                  sx={{ opacity: open ? 1 : 0, color: 'var(--clr-main)' }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'/pp-expenses'} className='sidebar-link'>
            <ListItem
              key='P&P Expenses'
              disablePadding
              sx={{ display: 'block' }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: 'var(--clr-main-light)',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <SsidChartIcon />
                </ListItemIcon>
                <ListItemText
                  primary='P&P Expenses'
                  sx={{ opacity: open ? 1 : 0, color: 'var(--clr-main)' }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'/home-expenses'} className='sidebar-link'>
            <ListItem
              key='House Expenses'
              disablePadding
              sx={{ display: 'block' }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: 'var(--clr-main-light)',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <EqualizerIcon />
                </ListItemIcon>
                <ListItemText
                  primary='House Expenses'
                  sx={{ opacity: open ? 1 : 0, color: 'var(--clr-main)' }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'/home-income-vs-expenses'} className='sidebar-link'>
            <ListItem
              key='House Income vs. Expenses'
              disablePadding
              sx={{ display: 'block' }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: 'var(--clr-main-light)',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <QueryStatsIcon />
                </ListItemIcon>
                <ListItemText
                  primary='Income vs. Expenses'
                  sx={{ opacity: open ? 1 : 0, color: 'var(--clr-main)' }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  )
}
