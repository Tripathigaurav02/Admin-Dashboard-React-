import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import "./navbar.scss"
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
           <ClosedCaptionOffIcon className="icon"/>
           English
          </div>
          <div className="item">
           <DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
           <FullscreenExitOutlinedIcon className="icon"/>
          </div>
          <div className="item">
           <NotificationsNoneOutlinedIcon className="icon"/>
           <div className="counter">1</div>
          </div>
          <div className="item">
           <ChatBubbleOutlineOutlinedIcon className="icon"/>
           <div className="counter">2</div>
          </div>
          <div className="item">
           <FormatListBulletedOutlinedIcon className="icon"/>
          </div>
          <div className="item">
           <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
           alt=""
           className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}
 export default Navbar