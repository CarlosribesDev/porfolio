import { db } from '../../dataBase/fireBase'
import { useState,useEffect } from 'react';
import Task from './Task';

export default function AllTask(){

    const [taskState,SetTaskState] = useState([])

    useEffect(()=> {
        //devulve todos los datos de una coleccion
        db.collection('todo').onSnapshot(querySnapshot => {
            
            const allTask = []

            querySnapshot.docs.forEach(doc => {
                const {task} = doc.data()
                const id = doc.id;
              
                allTask.push({
                    task : task,
                    id: id,    
                })     
            })
            SetTaskState(allTask)
        })

    },[])

   

    return (
        <ul>
        {
            taskState.map(ele => <Task task={ele.task} key={ele.id} id={ele.id}/>)
        }
        </ul>
    )
}
