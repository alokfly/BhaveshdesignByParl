import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import styled from 'styled-components'
import CouponList from './CouponList'
import HOC from '../../Common/HOC'
import { useNavigate } from 'react-router'

const MainContainer = styled.div`
  width: 100%;

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

const Coupon = () => {
  const navigate = useNavigate();

  return (
    <>
    <ContainerS>
      <MainContainer>
      <Header>
            <span>All Coupons
                     <span  onClick={() => navigate("/dashbord")} >/
                        Home
                    </span>
            </span> 
            <button onClick={() => navigate("/add-coupons")}>  Add Coupon</button>
            </Header>
        <CouponList/>
      </MainContainer>
    </ContainerS>

    </>
  )
}

export default HOC(Coupon)