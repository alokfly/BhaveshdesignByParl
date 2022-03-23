import { border } from '@mui/system'
import React from 'react'
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

  const [Editname, setEditname] = React.useState("");
  const [Editid, setEditid] = React.useState("");


  const updtedata = () => {
    data[Editid].status = Editname;
    setOpen(false);
    setdata([... data])
}


        const[ data, setdata] = React.useState([
          {
            id : '1',
            code : '67DF6',
            discount: '20',
            from : '20-03-2022 02:00PM',
            to: '27-03-2022 01:59PM',
          
          },
          {
            id : '2',
            code : '67DF6',
            discount: '20',
            from : '20-03-2022 02:00PM',
            to: '27-03-2022 01:59PM',
          
          },
          {
            id : '3',
            code : '67DF6',
            discount: '20',
            from : '20-03-2022 02:00PM',
            to: '27-03-2022 01:59PM',
          
          },
          {
            id : '4',
            code : '67DF6',
            discount: '20',
            from : '20-03-2022 02:00PM',
            to: '27-03-2022 01:59PM',
          
          },
          {
            id : '5',
            code : '67DF6',
            discount: '20',
            from : '20-03-2022 02:00PM',
            to: '27-03-2022 01:59PM',
          
          },
          {
            id : '6',
            code : '67DF6',
            discount: '20',
            from : '20-03-2022 02:00PM',
            to: '27-03-2022 01:59PM',
          
          },
          {
            id : '7',
            code : '67DF6',
            discount: '20',
            from : '20-03-2022 02:00PM',
            to: '27-03-2022 01:59PM',
          
          },
          {
            id : '8',
            code : '67DF6',
            discount: '20',
            from : '20-03-2022 02:00PM',
            to: '27-03-2022 01:59PM',
          
          },
          {
            id : '9',
            code : '67DF6',
            discount: '20',
            from : '20-03-2022 02:00PM',
            to: '27-03-2022 01:59PM',
          
          },
          {
            id : '10',
            code : '67DF6',
            discount: '20',
            from : '20-03-2022 02:00PM',
            to: '27-03-2022 01:59PM',
          
          },
          {
            id : '11',
            code : '67DF6',
            discount: '20',
            from : '20-03-2022 02:00PM',
            to: '27-03-2022 01:59PM',
          
          },
       
    
 
        ])

   
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
          <th scope="col">#</th>
          {/* <th scope="col">Images</th> */}
          
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
          <th scope="row">{item.id} </th>
          <td>{item.code}</td>
          <td>{item.discount}%</td>
          <td>{item.from}</td>
    
          <td>{item.to} </td>
          <td>
            {/* <button onClick={handleClickOpen} style={{border: 'none', cursor : 'pointer',backgroundColor: '#10b0ef', color:'#fff' }}>View</button> */}
            <button onClick={()=>navigate('/edit-coupons',{state:item})} style={{margin : '0 10px',border: 'none', cursor : 'pointer',backgroundColor: '#54ef9c', color:'#fff' }}>Edit</button>
            <button style={{border: 'none', cursor : 'pointer',backgroundColor: 'red', color:'#fff' }}>delete</button>
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