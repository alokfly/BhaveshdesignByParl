import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
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
const GoodsList = styled.div`
  width: 100%;
  padding: 20px;
  margin: 10px 0;
  border: 1px solid lightgray;
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;

  h5{
    font-size: 0.845rem;
    span{
      color: #451bb1;
    }
  }

  button{
    margin:5px 10px;
    width: 118px;
    padding: 7px 0;
    border: none;
    border-radius: 5px;

    color: #fff;
    background-color: #17a2b8;

 

    
  }

`

const GoodsType = () => {

  const navigate = useNavigate();
  return (
    <>
        <ContainerS>
            <MainContainer>
            <Header>
            <span>Goods Type
                     <span  onClick={() => navigate("/dashbord")} >/
                        Home
                    </span>
            </span> 
            <button onClick={() => navigate("/add-goods")}>  Add Goods</button>
            </Header>
            <GoodsList>
              <h5><span>Name :</span><p>mechanical products</p></h5>
              <h5><span>Description :</span><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit minima recusandae minus modi aspernatur maxime inventore amet ipsam quam distinctio non, possimus ducimus et dolorum saepe? Corporis fugiat dolores ratione!</p></h5>

                <button onClick={()=>navigate('/edit-goods')}>Edit</button>
                <button style={{backgroundColor: 'red'}}>Delete</button>     
            </GoodsList>
            </MainContainer>
        </ContainerS>
    </>
  )
}

export default HOC(GoodsType)