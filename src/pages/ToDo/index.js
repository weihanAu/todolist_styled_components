import React,{useEffect, useState} from 'react'
import Button from '../../components/Button'
import Activites from '../../components/Activites'
import {Card} from './todoStyle'

const initialActivites ={toDos:[
  {name:'Study Js',done:true},
  {name:'Study React JS',done:false},
  {name:'Study Next.js',done:false}
]}

const Todo = () => {
  const [activites,setActivites] = useState(initialActivites);
  const [userInput,setUserInput] = useState('');
  
  const addClickHandler=()=>{
    if(userInput.trim().length===0){
      return alert('enter can not be empty');
    };
    setActivites((preState)=>{
      const newArray = preState.toDos.concat([]);
      newArray.push({name:userInput});
      return {toDos:newArray};
    });
    setUserInput('');
  };
  const deleteClickHandler=(index)=>{
    setActivites((preState)=>{
      const newArray = preState.toDos.filter((item,i)=>{
        console.log(item.key)
        return i !== index;
      });
      return {toDos:newArray};;
    })
  }
  const toggleHandler=(index)=>{
    setActivites((prevs)=>{
      const newArray = prevs.toDos.map((toDo,i)=>{
        if(i===index){
          return {...toDo,done:!toDo.done}
        }
        return toDo;
      });
      return {toDos:newArray}
    });
  }

  return (
    <section>
      <h1>i am new2ssda</h1>
     <Card todoCard>
     <input value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>
     <Button primary name={'add a event'} onClick={addClickHandler} />
     <Activites toggleHandler={toggleHandler} activites={activites.toDos} deleteHandler={deleteClickHandler}/>
     </Card>
    </section>
  )
}

export default Todo