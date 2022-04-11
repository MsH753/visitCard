import React from 'react'
import styled from 'styled-components'
import meHeader from '../pictures/meHeader.jpg'
import academy from '../pictures/academy.png'
import link from '../pictures/link.png'

const HEaderCont = styled.div`
  display: flex;
  align-content: center;
  
  justify-content: space-between;
  padding: 32px 80px;
  
`;
const MeImage = styled.div`
    display: flex;
    height: 52px;
`
const NameImg = styled.div`
    display: flex;
    padding-left: 20px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    
    align-self: center;
    
    
`;
const AcademyPict=styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  
`
const ButtonHeader=styled.button`
display: flex;
align-items: center;
font-family: 'Gilroy';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 18px;
background: #585CC6;
color: #FFFFFF;
padding: 17px 28px;
:hover{
  background: #FFFFFF;
  color: black;
}

`
const DivStyle = {
  paddingTop: "7px",
  
};

const Header = () => {
  return (
    <HEaderCont>
        <MeImage>
            <img src={meHeader}/>
            <NameImg>Алейников Ярослав</NameImg>  
        </MeImage>
        <AcademyPict>
          <img  src={link}/>
          <img style={DivStyle} src={academy}/>
         
        </AcademyPict>
        <ButtonHeader>
          Личный кабинет
        </ButtonHeader>
    
    
   </HEaderCont>
    
  )
}

export default Header