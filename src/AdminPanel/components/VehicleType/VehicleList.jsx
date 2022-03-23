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



const VehicleList = () => {

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
            name : 'Eco',
            loadWeight: '1000',
            baseFare : '67',
            pricePerKm: '60',
            pricePerMin: '10'


          },
          {
            id : '2',
            name : 'Sports',
            loadWeight: '999',
            baseFare : '30',
            pricePerKm: '100',
            pricePerMin: '50'


          },
          {
            id : '3',
            name : 'Sports',
            loadWeight: '956',
            baseFare : '35',
            pricePerKm: '100',
            pricePerMin: '50'


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
          
          <th scope="col">Name</th>
          <th scope="col">loadWeight</th>
          <th scope="col">baseFare</th>
          <th scope="col">pricePerKm</th>
          <th scope="col">pricePerMin</th>
          <th scope="col">Action</th>
        </tr>
      </thead>

      {/* <--------------Body-data------------> */}
      <tbody>
        {data.map((item)=>(

        <tr key={item.id}>
          <th scope="row">{item.id} </th>
          <td>{item.name}</td>
          <td>{item.loadWeight}</td>
          <td>{item.baseFare}</td>
          <td>{item.pricePerKm}</td>
          <td>{item.pricePerMin} </td>
          <td>
            <button onClick={handleClickOpen} style={{border: 'none', cursor : 'pointer',backgroundColor: '#10b0ef', color:'#fff' }}>View</button>
            <button onClick={()=>navigate('/edit-vehicletype',{state:item})} style={{margin : '0 10px',border: 'none', cursor : 'pointer',backgroundColor: '#54ef9c', color:'#fff' }}>Edit</button>
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

export default VehicleList