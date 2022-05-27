import  styled,{css} from 'styled-components'

export const StyledUl =styled.ul`
    width:100%;
    margin:0;
    padding:1em;
    background:white;
`;

export const StyledLi=styled.li`
 list-style-type:none;
 display:flex;
 justify-content:space-around;
 padding:0.25em;
 background:white;
`
export const StyledSpan=styled.span`
flex: 1 1 0px;
font-size:1.25em;
background:rgba(218, 224, 229, 0.5);
${props=>props.done&&css`
text-decoration: line-through;
`};
`