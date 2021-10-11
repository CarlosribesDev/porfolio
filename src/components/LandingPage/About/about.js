import './about.css'
import image from '../../../images/about.jpeg'

export default function About(){

    return(
        <div className='about'>
            <img clasname='about-image' src={image} alt='Carlos Ribes'></img>
            <Descripcion/>
        </div>
        
    )
}


function Descripcion(){

    const description = `asdjasdhjksadhjkashdaskhldkjsahdkhasdkhasldh
    asdasdasdkjsadsahdjksahdgsajhgdjgasdjgsadskajdjsgadjghsad
    sdjakdhksajhdjkashdkjashdjkhsakjdhaskd
    dsakdhksajhdkahsdkasdsfdsfdsdsfdsfsdfdsfdsfdsds`

    return(
        <div className='about-info'>
        <h2>Sobre mi</h2>
        <div className = 'divider'> </div>
        <p>
           {description}
        </p>
        <button className='download-cv'>Read more</button>
      
       

    </div>
    )
}