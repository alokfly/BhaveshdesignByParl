import React,{useState} from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import { useLocation} from 'react-router'
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


const EditVehicleType = () => {

    const location = useLocation();
    console.log('location:::',location.state)
    const name = location.state.name
    const loadWeights = location.state.loadWeight
    const baseFares = location.state.baseFare
    const pricePerKms = location.state.pricePerKm
    const pricePerMins = location.state.pricePerMin
    const id = location.state._id





    const [userID,setuserID] = useState(id);
    const [vehiclename,setvehiclename] = useState(name);
    const [loadWeight,setloadWeight] = useState ('');
    const [baseFare,setbaseFare] =useState('')
    const [pricePerKm,setpricePerKm] = useState('')
    const [pricePerMin,setpricePerMin] = useState('')


    const token = (localStorage.getItem('token'))

    const EditVehicleTye = async () => {

        const Auth = {
            headers : {"Authorization" : `Bearer ${token}`}
        }


        let temp = {
            vehiclename:vehiclename,
            loadWeight:loadWeight,
            baseFare:baseFare,
            pricePerKm:pricePerKm,
            pricePerMin:pricePerMin
        };

        try{


        await
        axios
        .put(`https://we-fast-flyweis.herokuapp.com/vehicle-type/${userID}`,temp,Auth)
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
            <span>Edit Vehicle Type</span>
            
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

            <button onClick={ EditVehicleTye }>Update</button>

        </MainCategories>  
    </ContainerS>
    </>
  )
}

export default HOC(EditVehicleType)