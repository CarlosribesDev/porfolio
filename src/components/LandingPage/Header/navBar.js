import './navBar.css'
import {Switch,Route,NavLink} from 'react-router-dom'
import Todo from '../../../Routes/Todo'
export default function NavBar(){

    return(
        // <>
        <div className='navBar'>
            
            <div className='brand'>
                <h2>C<span>R</span></h2>
            </div>  
            <div className="navigation">
                <NavLink activeClassName='routeActive' className='route'to='/home'>Home</NavLink>
                <NavLink activeClassName='routeActive' className='route' to='/about'>About</NavLink>          
                <NavLink activeClassName='routeActive' className='route' to='/porfolio'>Porfolio</NavLink>
                <NavLink activeClassName='routeActive' className='route' to='/contact'>Contact</NavLink>
            </div>
            <Switch>
                    <Route path='/home'></Route>
                    <Route path='/about'></Route>
                    <Route path='/porfolio'><Todo/></Route>
                    <Route path='/contact'></Route>      
            </Switch>            
        </div>
    )
    
}
