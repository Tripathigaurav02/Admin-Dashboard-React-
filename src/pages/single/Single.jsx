import React from 'react'
import './single.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single=()=>{
    return (
    <div className="single">
       <Sidebar/>
       <div className="singleContainer">
        <Navbar/>
        <div className="top">
            <div className="left">
                <div className="editButton">Edit</div>
             <h1 className="title">Information</h1>
             <div className="item">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="itemImg" />
               <div className="details">
                <h1 className="itemTitle">Snow</h1>
                <div className="detailItem">
                    <span className='itemKey'>Email:</span>
                    <span className='itemValue'>snow@gmail.com</span>
                    </div>
                    <div className="detailItem">
                    <span className='itemKey'>Phone:</span>
                    <span className='itemValue'>+1 783 453 8978</span>
                    </div>
                    <div className="detailItem">
                    <span className='itemKey'>Address:</span>
                    <span className='itemValue'>Alferd Street, Florida, USA</span>
                    </div>
                    <div className="detailItem">
                    <span className='itemKey'>Country:</span>
                    <span className='itemValue'>USA</span>
                    </div>

               </div>
             </div>
            </div>
            <div className="right">
            <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
            </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Trasactions</h1>
            <List/>
        </div>
       </div>
        </div>
    )
}

export default Single