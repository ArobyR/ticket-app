import ShiftItemList from '../ShiftItemList/ShiftItemList';
import './shirt-list.css'

const ShiftList = (props) => {
    const data = props.data;
    
    return (
        <div className='shift-container'>
            <h2 className='title-3 text-center'>Turnos: </h2>
            {/* {
                data.map(info => {
                    <CardInfo data={info} />
                })
            } */}

            <ShiftItemList />
            <ShiftItemList />
            <ShiftItemList />
        </div>
    );
}
 
export default ShiftList;