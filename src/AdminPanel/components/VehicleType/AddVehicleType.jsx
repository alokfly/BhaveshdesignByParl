import React,{useState} from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import {  TextField } from '@mui/material'

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


const AddVehicleType = () => {
    
    //api call

    const token = (localStorage.getItem('token')) //fst step

    let url = "https://we-fast-flyweis.herokuapp.com/vehicle-type/" //2nd step

    //3rd step
    const [vehiclename,setvehiclename] = useState("");
    const [loadWeight,setloadWeight] = useState ("");
    const [baseFare,setbaseFare] =useState("")
    const [pricePerKm,setpricePerKm] = useState("")
    const [pricePerMin,setpricePerMin] = useState("")

    //4th step
     let temp ={

        name : vehiclename,
        loadWeight : loadWeight,
        baseFare : baseFare,
        pricePerKm : pricePerKm,
        pricePerMin : pricePerMin,

    }

    //5th step main api call 

    const AddVType = (e)=>{
        //1st step inside api call

        const config = {
            headers : {"Authorization" : `Bearer ${token}`}
        }

        console.log(config)
        axios.post(url,temp,config).then(res=>{
            console.log('sucess:::',res)
        }).catch(err=>{
            console.log("error",err)
        })

    }

  return (
    <>
    <ContainerS>

        <MainCategories>
            <span>Add Categories</span>
            
            <Inputs>
            <TextField  label="Name"
                    id="outlined-size-small"
                    value={vehiclename}
                    onChange={(e) => {
                        setvehiclename(e.target.value)
                    }}
                   
                    size="small"
                    margin='dense' />
            </Inputs>
            <Inputs>
            <TextField  label="LoadWeight"
                    id="outlined-size-small"
                    type='Number'
                    value={loadWeight}
                    onChange={(e)  => {
                        setloadWeight(e.target.value)
                    }}
                   
                    size="small"
                    margin='dense'/>
            </Inputs>
            <Inputs>
            <TextField  label="BaseFare"
                    id="outlined-size-small"
                    type='Number'
                   value={baseFare}
                   onChange={(e)=>{
                       setbaseFare(e.target.value)
                   }}
                    size="small"
                    margin='dense' />
            </Inputs>
            <Inputs>
                                
            <TextField
                    label="PricePerKm"
                    id="outlined-size-small"
                   value={pricePerKm}
                   onChange={(e) =>{
                       setpricePerKm(e.target.value)
                   }}
                    size="small"
                    margin='dense'
                    type='Number'
                    />
            <TextField
                    label="PricePerMin"
                    id="outlined-size-small"
                   value={pricePerMin}
                   onChange={(e) =>{
                       setpricePerMin(e.target.value)
                   }}
                    size="small"
                    margin='dense'
                    type='Number'
                    />
            </Inputs>

            <button onClick={ AddVType }>Save</button>

        </MainCategories>  
    </ContainerS>
    </>
  )
}

export default HOC(AddVehicleType)