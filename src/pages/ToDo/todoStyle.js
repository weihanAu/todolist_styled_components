import styled, { css } from 'styled-components'

export const Card = styled.div`
  
  
  ${props =>
    props.todoCard &&
    css`
     max-width:700px;
     margin:0 auto;
     text-align:center;
     background-color:white;
     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
     margin-top:8rem;
     padding:1em 0;
    `};
  
`