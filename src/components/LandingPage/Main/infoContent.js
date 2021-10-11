import './infoContent.css'

export default function InfoContent(){

    return(
        <div className='info-content'>
            <Name/>
            <Description/>
            <ButtonDownLoad/>
        </div>
    )
}

function Name(){

    return(
        <h1>Soy <span>Carlos</span> Ribes</h1>
    )
}

function Description(){

    return(
        <p>Soy el puto amo capitan y tu a que esperas ¿quieres saber mis secreto?</p>
    )
}

function ButtonDownLoad(){

    return(
        <a download='' href='#'>
            <button className='download-cv'> Download CV </button>
        </a>
    )
} 