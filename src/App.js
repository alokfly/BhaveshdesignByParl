import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from './AdminPanel/components/Login/Login'
import { useEffect } from "react";
import MainDashBord from './AdminPanel/components/Dashbord/MainHome'
import VendorsHome from "./AdminPanel/components/Drivers/DriversHome";
import AllUsers from "./AdminPanel/components/Users/AllUsers";
import AdminNotification from "./AdminPanel/components/Notifications/AdminNotification";
import AdminProfileUpdate from './AdminPanel/components/Profile/AdminProfile'

import EditDriver from "./AdminPanel/components/Drivers/EditDriver";
import AllVehicleHome from "./AdminPanel/components/AllVehicle/AllVehicleHome";
import AddVehicle from "./AdminPanel/components/AllVehicle/AddVehicle";
import EditVehicle from "./AdminPanel/components/AllVehicle/EditVehicle";
import NotificationHome from "./AdminPanel/components/Notifications/NotificationHome";
import AddVehicleType from "./AdminPanel/components/VehicleType/AddVehicleType";
import VehicleType from "./AdminPanel/components/VehicleType/VehicleType";
import EditVehicleType from "./AdminPanel/components/VehicleType/EditVehicleType";
import GoodsType from "./AdminPanel/components/GoodsType/GoodsType";
import AddGoods from "./AdminPanel/components/GoodsType/AddGoods";
import EditGoods from "./AdminPanel/components/GoodsType/EditGoods";
import AddCopons from "./AdminPanel/components/Coupons/AddCopons";
import ForgotPassword from "./AdminPanel/components/ForgetPassword/ForgotPassword";
import OPTpage from "./AdminPanel/components/ForgetPassword/OTPpage";
import EnterPassword from "./AdminPanel/components/ForgetPassword/NewPassword";

import Coupon from './AdminPanel/components/Coupons/Coupon'
import EditCopons from "./AdminPanel/components/Coupons/EditCopons";
import BookingHome from "./AdminPanel/components/Booking/BookingHome";



function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
},[])
  return (
    <>
      <Routes>
         {/* <-----------------Admin-Panel------------------>  */}
          <Route path="/" element={<Login />} />
          <Route path="/dashbord" element={<MainDashBord />} />
          <Route path="/vendor" element={<VendorsHome />} />             
          <Route path="/uers" element={<AllUsers />} />             
          <Route path="/admin-notificatin" element={<NotificationHome />} />             
          <Route path="/send-notificatin" element={<AdminNotification />} />             
          <Route path="/admin-profile" element={<AdminProfileUpdate />} />              
          <Route path="/Edit-driver" element={ <EditDriver/> } />
          <Route path="/vehicle-list" element={ <AllVehicleHome/> } />
          <Route path="/add-vehicle" element={ <AddVehicle/> } />
          <Route path="/edit-vehicle" element={ <EditVehicle/> } />
          <Route path="/edit-vehicletype" element={ <EditVehicleType/> } />
          <Route path="/add-vehicletype" element={ <AddVehicleType/> } />
          <Route path="/vehicletype" element={ <VehicleType/> } />
          <Route path="/goodsType" element={ <GoodsType/> } />
          <Route path="/add-goods" element={ <AddGoods/> } />
          <Route path="/edit-goods" element={ <EditGoods/> } />
          <Route path="/add-coupons" element={ <AddCopons/> } />
          <Route path="/add-coupons" element={ <AddCopons/> } />
          <Route path="/forgotpassword" element={ <ForgotPassword/> } />
          <Route path="/otp" element={ <OPTpage/> } />
          <Route path="/newpassword" element={ <EnterPassword/> } />
          <Route path="/coupons" element={ <Coupon/> } />
          <Route path="/edit-coupons" element={ <EditCopons/> } />
          <Route path="/booking" element={ <BookingHome/> } />
          
        {/* <----------------------vendor-Panel-------------------> */}



        {/* <------------------Employe-Pnel---------------------->   */}
      
       
      </Routes>
    </>
  );
}

export default App;
