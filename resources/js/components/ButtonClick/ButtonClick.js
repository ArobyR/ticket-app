import '../../../css/global.css';

const ButtonClick = (props) => {
    return ( 
        <button className="btn-style" onClick={props.handleOnClick}>
            {props.name}
        </button>
    );
}
 
export default ButtonClick;