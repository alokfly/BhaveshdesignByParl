import React,{useState} from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { makeStyles } from '@material-ui/styles'


const MainCategories = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightblue;
    border-radius: 4px;
    padding: 20px;
    flex-direction: column;

    button{
        padding: 6px 15px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        color: #fff;
        background-color: #17a2b8;

    }
`
const Inputs = styled.div`
    width: 50%;

`
const CheckBoxs = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`
const Header = styled.div`
display: flex;
width: 100%;
height: 70px;
align-items: center;
border: 1px solid lightblue;
margin-bottom: 20px ;
border-radius: 4px;
cursor: pointer;

span{
    padding: 0 20px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #17a2b8;
    display: flex;
    align-items: center;
    cursor: pointer;
}
`
const AddCoupons = () => {

  

    const navigate = useNavigate();
    // const uniqueId = parseInt(Date.now() * Math.random());
    const uniqueId = (Math.random() + 1).toString(36).substring(7);
    // (Math.random() + 1).toString(36).substring(7)
    
    const [id, setid] = useState('')
    const random =()=>{
        setid(uniqueId)

    }
        // ----------------------api---------------------
    const [couponCode,setcouponCode] = useState ("");
    const [discountPercentage,setdiscountPercentage] =useState("")
    const [validFrom,setvalidFrom] =useState("")
    const [validTill,setvalidTill] =useState("")
   

    const handleAdd = () => {
        try{
        let url = "https://we-fast-flyweis.herokuapp.com/coupon"

        let temp = {
            couponCode : couponCode,
            discountPercentage :discountPercentage,
            validFrom : validFrom,
            validTill : validTill

        };

        axios
        .post(url,temp)
        .then(
            (res) => {
            console.log("data response::",res)
        })
        }catch (error) {}

    }

  return (
    <>
    <ContainerS>
        <Header>
            <span>Add Coupons
            <span  onClick={() => navigate("/dashbord")} >/
                 Home
            </span>
            </span> 
        </Header> 
        <MainCategories>
            
            <Inputs>
            <TextField  label="CouponCode"
                    id="outlined-size-small"
                    value={id}
                    onChange={(e) => {
                        setcouponCode(e.target.value)
                    }}
                    inputProps= {{style: {textTransform : 'uppercase'}}}  
                    size="small"
                    margin='dense' />
                    <button onClick={random}>Generate Coupon</button>
            </Inputs>
            <Inputs>
            <TextField  label="Discount Percentage"
                    id="outlined-size-small"
                    value={discountPercentage}
                    type='number'
                    onChange={(e)  => {
                        setdiscountPercentage(e.target.value)
                    }}
                   
                    size="small"
                    margin='dense'/>
            </Inputs>
            <Inputs>
            <span>Valid From</span>
            <TextField
                    label="mm/dd/yyyy"
                    id="outlined-size-small"
                    value={validFrom}
                    onChange={(e)  => {
                        setvalidFrom(e.target.value)
                    }}
                    type ='datetime-local'
                   
                    size="small"
                    margin='dense'/>
            </Inputs>
            <Inputs>
            <span>Valid Till</span>
            <TextField
                     label="mm/dd/yyyy"
                    inputFormat="MM/dd/yyyy"
                 
                    id="outlined-size-small"
                    value={validTill}
                    onChange={(e)  => {
                        setvalidTill(e.target.value)
                    }}
                    type='datetime-local'
                   
                    size="small"
                    margin='dense'/>
            </Inputs>
        
           

            <button onClick={ handleAdd }>Save</button>

        </MainCategories>  
    </ContainerS>
    </>
  )
}

export default HOC(AddCoupons)


