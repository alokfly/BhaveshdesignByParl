import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import TimeToLeaveTwoToneIcon from '@mui/icons-material/TimeToLeaveTwoTone';
import BikeScooterOutlinedIcon from '@mui/icons-material/BikeScooterOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AirlineSeatLegroomReducedTwoToneIcon from '@mui/icons-material/AirlineSeatLegroomReducedTwoTone';

import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';

import { RiCoupon5Line } from 'react-icons/ri';

import "react-pro-sidebar/dist/css/styles.css";
import {
    faFile,
    faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = (props) => {

    const removeToken = (token) => {
        localStorage.clear();     
    };

    const navigate = useNavigate();
    return (
        <>
            <div className="sidebar_in_mobile_view">
                <ProSidebar collapsed={props.isloading}>
                    <Menu iconShape="circle">
                    {/* <MenuItem onClick={() => navigate("/dashbord")}>Dashboard</MenuItem> */}
                    <MenuItem title="DashBord" onClick={() => navigate("/dashbord")} icon={<DashboardTwoToneIcon />}>Dashboard</MenuItem>
                    {/* <MenuItem title="User Information" onClick={() => navigate("/uers")} icon={<SupervisedUserCircleIcon />}>Users Information</MenuItem> */}
                    <MenuItem title="Driver Information" onClick={() => navigate("/vendor")} icon={<AirlineSeatLegroomReducedTwoToneIcon />}>Driver Information</MenuItem>                         
                     <MenuItem title="Notifaction" icon={<NotificationsActiveOutlinedIcon />} onClick={() => navigate("/admin-notificatin")}>Push-Notifaction</MenuItem>                          
                     <MenuItem title="goodstype" icon={<ArchiveOutlinedIcon />} onClick={() => navigate("/goodsType")}>Goods Type</MenuItem>                          
                     <MenuItem title="VehicleType" icon={<TimeToLeaveTwoToneIcon />} onClick={() => navigate("/vehicletype")}>Vehicle Type</MenuItem>                          
                     <MenuItem title="All Vehicle" icon={<BikeScooterOutlinedIcon />} onClick={() => navigate("/vehicle-list")}>All Vehicle</MenuItem>                          
                     <MenuItem title="Coupons" icon={<RiCoupon5Line />} onClick={() => navigate("/coupons")}>Coupons</MenuItem>                          
                     {/* <MenuItem title="Booking" icon={<FontAwesomeIcon icon={faFile} />} onClick={() => navigate("/booking")}>Booking</MenuItem>                           */}
                    
                    
                     <SubMenu title="Setting" icon={<SettingsOutlinedIcon />}>
    
                            <MenuItem onClick={() => navigate("/admin-profile")}>Profile Settings</MenuItem>
                        <Link to='/'>
                                 <MenuItem onClick={removeToken}>Logout</MenuItem> 
                        </Link>
                          
                    </SubMenu>
                    </Menu>
                </ProSidebar>
            </div>

        </>
    );
}

export default Sidebar;
