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

const AddVehicleType = () => {
    const navigate = useNavigate();


    const [vehiclename,setvehiclename] = useState("");
    const [loadWeight,setloadWeight] = useState ("");
    const [baseFare,setbaseFare] =useState("")
    const [pricePerKm,setpricePerKm] = useState("")
    const [pricePerMin,setpricePerMin] = useState("")

    const AddVType = () => {
        try{
        let url = "https://we-fast-flyweis.herokuapp.com/vehicle-type"

        let temp = {
            vehiclename:vehiclename,
            loadWeight:loadWeight,
            baseFare:baseFare,
            pricePerKm:pricePerKm,
            pricePerMin:pricePerMin
        };

        axios
        .post(url,temp)
        .then(
            (res) => {
            console.log("data response::",res)
        })
        }catch (error) {
            console.log('Error::',error)
        }
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