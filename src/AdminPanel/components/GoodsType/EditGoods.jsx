import React,{useState} from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { TextField } from '@mui/material'
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
const EditGoods = () => {
    const navigate = useNavigate();

   
    const [name,setName] = useState ("");
    const [description,setdescription] =useState("")
   

    const handleAdd = () => {
        try{
        let url = "https://we-fast-flyweis.herokuapp.com/goods-type"

        let temp = {
            description:description,
            name:name,
          
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
            <span>Edit Goods
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
            <TextField  label="Description"
                    id="outlined-size-small"
                    value={description}
                    onChange={(e)  => {
                        setdescription(e.target.value)
                    }}
                   
                    size="small"
                    margin='dense'/>
            </Inputs>
           

            <button onClick={ handleAdd }>Save</button>

        </MainCategories>  
    </ContainerS>
    </>
  )
}

export default HOC(EditGoods)