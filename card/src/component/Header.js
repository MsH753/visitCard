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
  align-items: center;
  justify-content: space-between;
  padding: 32px 80px;
  
`;
const meImage = styled.div`
    display: flex;
`
const NameImg = styled.div`
    border: 1px solid black;
`;


const Header = () => {
  return (
    <Wrapper>
        <meImage>
            <NameImg><img  src={meHeader}/></NameImg>
            
        </meImage>
    
    
   </Wrapper>
    
  )
}

export default Header