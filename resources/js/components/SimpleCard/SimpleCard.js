import './simple-card.css'

const SimpleCard = (props) => {
    return (
        <div className='simple-container'>
            <p className='p-title'>{props.title}</p>
            <p className='p-body' style={{color: props.color }}>{props.body}</p>
        </div>

    );
}
 
export default SimpleCard;