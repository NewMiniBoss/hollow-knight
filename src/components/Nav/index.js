// import './Nav.scss';
import logo from '../../assets/logo.png';
import knight from '../../assets/knight.png';


const Nav = () => {
    return (
        <nav>
            <img src={logo} alt='logo'></img>
            <a href='#.'><img src={knight} alt='Hollow Knight'></img></a>
        </nav>
    )
}

export default Nav