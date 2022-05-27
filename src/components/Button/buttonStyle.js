import styled, { css } from 'styled-components'

export const ButtonStyled = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    padding:0.25em;
    margin-left:1em;
  ${props =>
    props.primary &&
    css`
     background: palevioletred;
     color: white;
    `};
  
`