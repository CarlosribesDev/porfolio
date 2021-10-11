import { db } from '../../dataBase/fireBase'
import './Task.css'

export default function Task({task,id}){

    const DeleteTask = async() => {
        
        const doc = await db.collection('todo').doc(id).get()
        doc.ref.delete()    
    }

    return  <li className='task'>
                <p className='text'>{task}</p>
                <button className='button'onClick={DeleteTask}>borrar</button> 
            </li>
}