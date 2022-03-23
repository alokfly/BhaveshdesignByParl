import React from 'react'
import { ContainerS } from '../../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import VehicleList from './VehicleList'

const MainContentWrapper = styled.div`
    width: 100%;
    margin: 0 20xp;
    padding: 10px;
`
const Header = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    align-items: center;
    border: 1px solid lightblue;
    margin-bottom: 20px ;
    border-radius: 4px;
    justify-content: space-between;
    padding: 0 20px;

    span{
        
        font-size: 1.1rem;
        font-weight: 600;
        color: #17a2b8;
        display: flex;
        align-items: center;
    }
    button{
        border: none;
        padding: 6px 12px;
        cursor: pointer;
        color: #fff;
        background-color: #17a2b8;
    }
`

const VehicleType = () => {

    const navigate = useNavigate();
  return (
    <>
        <ContainerS>
        <Header>
            <span>All Vehicle Type
                     <span  onClick={() => navigate("/dashbord")} >/
                        Home
                    </span>
            </span> 
            <button onClick={() => navigate("/add-vehicletype")}>  Add Vehicle Type</button>
            </Header>
            <MainContentWrapper>
                <VehicleList/>

            </MainContentWrapper>
        </ContainerS>
    </>
  )
}

export default HOC(VehicleType)

// "name": "eco",
// "loadWeight": 50,
// "baseFare": 50,
// "pricePerKm": 10,
// "pricePerMin": 5