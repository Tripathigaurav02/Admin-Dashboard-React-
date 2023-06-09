import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom"
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

export const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
       <div className='top'>
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Gaurav</span>
        </Link></div>
       <hr/>
       <div className='center'><ul>
       <p className="title">MAIN</p>
        <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
        <p className="title">LISTS</p>
        <Link to="/users" style={{textDecoration:"none"}}>
        <li><PersonIcon className='icon'/><span>Users</span></li></Link>
        <Link to="/products" style={{textDecoration:"none"}}>
        <li><StorefrontIcon className='icon'/><span>Products</span></li></Link>
        <li><CreditCardIcon className='icon'/><span>Orders</span></li>
        <li><LocalShippingIcon className='icon'/><span>Delivery</span></li>
        <p className="title">USEFUL</p>
        <li><LeaderboardIcon className='icon'/><span>Stats</span></li>
        <li><NotificationsNoneIcon className='icon'/><span>Notifications</span></li>
        <p className="title">SERVICE</p>
        <li><MonitorHeartIcon className='icon'/><span>System Health</span></li>
        <li><PsychologyIcon className='icon'/><span>Logs</span></li>
        <li><SettingsApplicationsIcon className='icon'/><span>Settings</span></li>
        <p className="title">USER</p>
        <li><AccountCircleIcon className='icon'/><span>Profile</span></li>
        <li><ExitToAppIcon className='icon'/><span>Logout</span></li>
        </ul>
        </div>
       <div className='bottom'>
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
       </div>
        </div>
  )
}
export default Sidebar
