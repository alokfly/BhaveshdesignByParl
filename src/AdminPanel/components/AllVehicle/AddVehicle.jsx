import React,{useState,useEffect} from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import { Label } from '@material-ui/icons'
import { useNavigate } from 'react-router'
import axios from 'axios'

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
const AddVehicle = () => {
    const navigate = useNavigate();

    const [vichleNumber,setVichleNumber] = useState("");
    const [name,setName] = useState ("");
    const [vichleType,setVichleType] =useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const token = localStorage.getItem("token");
    console.log(token)


    const Addvchl = () => {
        try{
        let url = "https://we-fast-flyweis.herokuapp.com/vehicle"

        const config = {
            headers: { Authorization: `Bearer${token}` }
        };

        let temp = {
            vehicleNumber:vichleNumber,
            name:name,
            vehicleType:vichleType,
            phone_number:phoneNumber
        };

        

        console.log(config)

        axios
        .post(url,config,temp)
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
                    <span>Add Vehicle
                        <span  onClick={() => navigate("/dashbord")} >/
                            Home
                        </span>
                    </span> 
                </Header> 
        <MainCategories>
            
            <Inputs>
            <TextField  label="Name"
                    id="outlined-size-small"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                   
                    size="small"
                    margin='dense' />
            </Inputs>
            <Inputs>
            <TextField  label="vehicleNumber"
                    id="outlined-size-small"
                    value={vichleNumber}
                    onChange={(e)  => {
                        setVichleNumber(e.target.value)
                    }}
                   
                    size="small"
                    margin='dense'/>
            </Inputs>
            <Inputs>
            <TextField  label="vehicleType"
                    id="outlined-size-small"
                   value={vichleType}
                   onChange={(e)=>{
                       setVichleType(e.target.value)
                   }}
                    size="small"
                    margin='dense' />
            </Inputs>
            <Inputs>
                                
            <TextField
                    label="Phone no"
                    id="outlined-size-small"
                   value={phoneNumber}
                   onChange={(e) =>{
                       setPhoneNumber(e.target.value)
                   }}
                    size="small"
                    margin='dense'
                    type='Number'
                    />
            </Inputs>

            <button onClick={ Addvchl }>Save</button>

        </MainCategories>  
    </ContainerS>
    </>
  )
}

export default HOC(AddVehicle)