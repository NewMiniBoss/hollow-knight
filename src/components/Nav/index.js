import { useRef } from 'react';
import logo from '../../assets/logo.png';
import knight from '../../assets/knight.png';
import menuVideo from '../../assets/menuzin.mp4';

const Nav = () => {
    const elemento = useRef(null);
    const eventMenu = () => {
        const menu = elemento.current;
        menu.classList.toggle('menu-open');
    }

    return (
        <nav>
            <img src={logo} alt='logo'></img>
            <a href='#.' onClick={eventMenu}><img src={knight} alt='Hollow Knight'></img></a>

            <div ref={elemento} className='menu-closed'>
                <video src={menuVideo} autoPlay loop muted playsinline>
                    {/* <source type="video/mp4" /> */}
                </video>
            </div>
        </nav>
    )
}

export default Nav