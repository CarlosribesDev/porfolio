
import AllTask from '../components/Todo/AllTask'
import TaskForm from '../components/Todo/TaskForm'
import './Todo.css'

export default function Todo (){

    return (
        <div className='Todo'>
            <TaskForm/>
            <AllTask/>
        </div>
    )
}