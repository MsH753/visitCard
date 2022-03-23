import React from 'react'
import styled from 'styled-components'
import meHeader from '../pictures/meHeader.jpg'

const Title = styled.div`

  font-size: 1.5em;
  
  text-align: center;
  color: black;
`;
const Wrapper = styled.div`
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
    
    align-items: center;
    
`;


const Header = () => {
  return (
    <Wrapper>
        <MeImage>
            <img  src={meHeader}/>
            <NameImg>Алейников Ярослав</NameImg>
            
        </MeImage>
    
    
   </Wrapper>
    
  )
}

export default Header