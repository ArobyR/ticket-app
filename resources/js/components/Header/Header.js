import './header.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = (props) => {
    return (
        <header className='header'>
            <GiHamburgerMenu onClick={props.handleNav} />
        </header>
    );
}

export default Header;