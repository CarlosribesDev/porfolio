import { useState } from 'react';
import {db,created} from '../../dataBase/fireBase'
import './TaskForm.css'

export default function TaskForm(){
    const [todo,SetTodo] = useState()

    const AddTodo = async (e) => {
       
        e.preventDefault()

        if(todo !== ''){
            await db.collection('todo').add({
                task:todo,
                createdAt:created.fromDate(new Date()),
            })
        
        }else{
            alert('la tarea no tiene titulo')
        }
        
        document.getElementById('textField').value=''
        
    }

    const Updatetext = (e) =>{

        SetTodo(e.target.value)
      
    }

    return (
        <form className='Form'>
            <input className='TextInput'id='textField' type='text' onChange={Updatetext}/>
            <button type='submit' onClick={AddTodo}> añadir </button>
        </form>
    )
}