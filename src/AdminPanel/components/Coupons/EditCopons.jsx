import React,{useState} from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router'
import axios from 'axios'

import { useLocation } from 'react-router'


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
const EditCopons = () => {

    const location = useLocation();
    const code = location.state.code
    const discount = location.state.discountPercentage
    const from = location.state.validFrom
    const to = location.state.validTill
    const id = location.state.id


    console.log('location::::::::::',location.state)

    const navigate = useNavigate();
    // const uniqueId = parseInt(Date.now() * Math.random());
    const uniqueId = (Math.random() + 1).toString(36).substring(7);

    //----api---->
   
    const [discountPercentage,setdiscountPercentage] =useState(discount)
    const [validFrom,setvalidFrom] =useState(from)
    const [validTill,setvalidTill] =useState(to)
    const [userId,setuserId] =useState(id)
    let url = "https://we-fast-flyweis.herokuapp.com/coupon/${userId}"
    
    const token = (localStorage.getItem('token'))

   

    const handleUpdate = async () => {

        const Auth = {
            headers: {"Authorization": `Bearer ${token}`}
        }
        try{

        let temp = {
            discountPercentage :discountPercentage,
            validFrom : validFrom,
            validTill : validTill
        };
      await axios.put(`https://we-fast-flyweis.herokuapp.com/coupon/${userId}`,temp,Auth)
        .then(
            (res) => {
            console.log("data response::",res)
        })
        }catch (error) {
            console.log("my error",error)
        }
    }

  return (
    <>
    <ContainerS>
        <Header>
            <span>Edit Coupons
            <span  onClick={() => navigate("/dashbord")} >/
                 Home
            </span>
            </span> 
        </Header> 
        <MainCategories>
            
    
            <Inputs>
                <h6>Coupon Code : <span>{code} </span></h6>
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
        
           

            <button onClick={ handleUpdate }>Save</button>

        </MainCategories>  
    </ContainerS>
    </>
  )
}

export default HOC(EditCopons)


