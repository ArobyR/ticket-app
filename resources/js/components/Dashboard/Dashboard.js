import SimpleChart from "../Chart/SimpleChart";
import SimpleCard from "../SimpleCard/SimpleCard";
import '../../../css/global.css';

const Dashboard = () => {

    // peticion a la api (TODOS los datos)
    return (
        <div>
            <div className='main m-4'>
                <SimpleCard title='Total Visitantes' body='1222' />
                <SimpleCard title='Total Cancelados' body='1222' color='red' />
                <SimpleCard title='Total Atendidos' body='1222' color='green' />
            </div>

            <div className='main mx-auto' style={{height: '400px', width: '1100px'}}>
                <SimpleChart />
            </div>

        </div>
    );
}
 
export default Dashboard;