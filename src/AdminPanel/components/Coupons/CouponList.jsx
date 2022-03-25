import { border } from '@mui/system'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router'


import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import axios from 'axios';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));




const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

let style = {
  width : '55px',
  height : '55px',
  border : '1px solid lightgray',
  borderRadius: '999px',
  
}



const CouponList = () => {


  //api -integrations get data

  const url = 'https://we-fast-flyweis.herokuapp.com/coupon/all'

  const token = (localStorage.getItem('token'))
  const [data, setdata] = useState([])

  let config = {
    headers: {"Authorization" : `Bearer ${token}`}
  }

  const GetCoupons = async ()=>{
  

    try{ 
      const data = await axios.get(url,config)
      console.log('mydata::',data.data.data.coupons)
      setdata(data.data.data.coupons)

    }catch(e){
      console.log("lol error::",e)
    }
    
  }

  // delete data from database

  const handleDelete = async (id)=>{

   try{
      const res = await axios.delete("https://we-fast-flyweis.herokuapp.com/coupon/"+id,config)
      console.log("delete::",res)
      GetCoupons();
    }catch(e){
      console.log("All error:::",e)
    }

  }

  useEffect(()=>{
    GetCoupons();

  },[])



   
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

      const navigate = useNavigate()


  return (
    <>
          <table class="table">

            {/* <------------header----------------> */}
      <thead class="thead-dark">
        <tr>
         
          <th scope="col">Coupon Code</th>
          <th scope="col">Total Discount</th>
          <th scope="col">Valid From</th>
          <th scope="col">Valid To</th>
          
          <th scope="col">Action</th>
        </tr>
      </thead>

      {/* <--------------Body-data------------> */}
      <tbody>
        {data.map((item)=>(

        <tr key={item.id}>
        
          <td>{item.couponCode}</td>
          <td>{item.discountPercentage}%</td>
          <td>{item.validFrom}</td>
    
          <td>{item.validTill} </td>
          <td>
            {/* <button onClick={handleClickOpen} style={{border: 'none', cursor : 'pointer',backgroundColor: '#10b0ef', color:'#fff' }}>View</button> */}
            <button onClick={()=>navigate('/edit-coupons',{state:item})} style={{margin : '0 10px',border: 'none', cursor : 'pointer',backgroundColor: '#54ef9c', color:'#fff' }}>Edit</button>
            <button onClick={()=>handleDelete(item.id)} style={{border: 'none', cursor : 'pointer',backgroundColor: 'red', color:'#fff' }}>delete</button>
          </td>
        </tr>
        ))}
    
      </tbody>
    </table>

    {/* <----------Dialog Box ------------------> */}
    
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >   
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Driver Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
             <h6 style={{minWidth:'500px' , color: '#343232'}}>
                  name : Eco
             </h6>
          </Typography>
          <Typography gutterBottom>
            LoadWeight:  1000
          </Typography>
          <Typography gutterBottom>
          baseFar: 65
          </Typography>
          <Typography gutterBottom>
           Price per KM : 60
          </Typography>
          <Typography gutterBottom>
           Price per Min : 10
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>

     

    </>
  )
}

export default CouponList