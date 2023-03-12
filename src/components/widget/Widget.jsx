import React from 'react'
import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({type}) => {

  let data;
const amount=100;
const diff=20;

  switch(type){
    case "user":
      data={
        title:"USERS",
        isMoney:false,
        link:"See all users",
        icon:( <PersonIcon className='icon' style={{
              color:"crimson",
            backgroundColor:"rgba(255,0,0,0.2)"}}/>),
      };
      break;
      case "order":
        data={
          title:"ORDERS",
          isMoney:false,
          link:"View all Orders",
          icon: (<ShoppingBagOutlinedIcon className='icon' style={{
            color:"goldenrod",
            backgroundColor:"rgba(218,165,32,0.2)"}}/>),
        };
        break;
        case "earning":
          data={
            title:"EARNINGS",
            isMoney:true,
            link:"View net earnings",
            icon: (<AddCardOutlinedIcon className='icon' style={{
              color:"green",
              backgroundColor:"rgba(0,128,0,0.2)"}}/>),
          };
          break;
          case "balance":
            data={
              title:"BALANCE",
              isMoney:true,
              link:"See details",
              icon: (<AccountBalanceWalletOutlinedIcon className='icon'style={{
                color:"purple",
                backgroundColor:"rgba(128,0,128,0.2)"}}/>),
            };
            break;
      default:
      break;
  }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff}</div>
                {data.icon}
        </div>
    </div>
  )
}

export default Widget
