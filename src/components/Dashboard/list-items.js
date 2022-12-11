import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom'

const mystyle = {
  color: 'black',
  // color: '#FFFFFF',
  fontSize: '20px',
  fontWeight: '600',
  fontFamily: "Poppins",
  lineHeight: '35px'
};


export const mainListItems = (
  <>
    <div style={{color: 'black'}}>
    <NavLink exact to='/' activeClassName="activeNav"  style={{color: 'black', border: '0px solid red', width: '100%'}}>
    <ListItemButton>
    <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText style={{border: '0px solid red'}} primary={<Typography type="body2" style={mystyle}>HOME</Typography>} />
    </ListItemButton>
    </NavLink>
      <br/>
    <NavLink exact to='/company/jobs' activeClassName="activeNav" style={{color: 'black', border: '0px solid red', width: '100%'}}>
    <ListItemButton>
    <ListItemIcon>
        <WorkIcon />
    </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={mystyle}>JOBS</Typography>} />
    </ListItemButton>
    </NavLink>
    <br/>
    <NavLink exact to='/company/view-candidates' activeClassName="activeNav" style={{color: 'black', border: '0px solid red', width: '100%'}}>
    <ListItemButton>
    <ListItemIcon>
        <PeopleAltIcon />
    </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={mystyle}>CANDIDATES</Typography>} />
    </ListItemButton>
    </NavLink>
    <br/>
    {/* <NavLink exact to='/#' activeClassName="activeNav" style={{color: 'black', border: '0px solid red', width: '100%'}}> */}
    <ListItemButton>
    <ListItemIcon>
        <MoveToInboxIcon />
    </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={mystyle}>INBOX</Typography>} />
    </ListItemButton>
    {/* </NavLink> */}
    <br/>
    {/* <NavLink exact to='' activeClassName="activeNav" style={{color: 'black', border: '0px solid red', width: '100%'}}> */}
    <ListItemButton>
    <ListItemIcon>
        <SettingsIcon />
    </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={mystyle}>SETTINGS</Typography>} />
    </ListItemButton>
    {/* </NavLink> */}
    

    </div>
  </>
);
