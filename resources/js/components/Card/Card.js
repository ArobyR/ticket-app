import './card.css'

const Card = (props) => {
    return (
        <div onClick={props.handleOnClick} className='card-style'> 
            <img className='card-images mx-auto' src={props.logo}/>
            <div className='card-text'>{props.textSide}</div>
        </div>
    );
}
 
export default Card;