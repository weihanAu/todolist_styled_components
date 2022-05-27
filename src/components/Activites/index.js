import React from 'react'
import Button from '../Button'
import {StyledUl,StyledLi,StyledSpan} from './activitesStyle'

const Activites = (props) => {

  return (
    <StyledUl>
      {props.activites.map((item,index)=>{
        return (
          <StyledLi key={index}>
            <StyledSpan done={item.done}>{item.name}</StyledSpan>
              <StyledSpan>
                <Button name={'toggle'} onClick={props.toggleHandler.bind(null,index)}/>
                <Button name={'delete'} onClick={props.deleteHandler.bind(null,index)} />
              </StyledSpan>
          </StyledLi>)
      })}
    </StyledUl>
  )
}

export default Activites