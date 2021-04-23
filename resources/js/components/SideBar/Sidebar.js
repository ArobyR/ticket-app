import { Link } from 'react-router-dom';
import logo from '../../../images/ticket-d.png';
import './sidebar.css'
import { BiBarChartAlt2, BiSpreadsheet } from 'react-icons/bi'
import { RiHomeSmileFill, RiAdminFill } from 'react-icons/ri';
import { ImTicket } from 'react-icons/im';
import { FiUsers, FiLogOut } from 'react-icons/fi';


const SideBar = ({show}) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <img src={logo} className='logo' 
            alt='logo' /> 
            <span className='title-p'>Panel control</span>
            <ul>
                <li>
                    <Link className='link' to='/dashboard'>
                        <RiHomeSmileFill />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/reports'>
                        <BiSpreadsheet />
                        Reports
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/ticket'>
                        <ImTicket />
                        Ticket
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/admin/users'>
                        <FiUsers />
                        Users
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/admin'>
                        <RiAdminFill />
                        Admin
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/test'>
                        <FiLogOut />
                        Log Out
                    </Link>
                </li>
            </ul>    
        </div>
    );
}
 
export default SideBar;