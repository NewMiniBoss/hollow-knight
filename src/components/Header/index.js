import headerVideo from './../../assets/header.mp4'
import hollow from '../../assets/hollow.png'

const Header = () => {
    return (
        <header>
            <img src={hollow} alt="Hollow Knight logo"></img>
            <video autoPlay loop muted playsinline>
                <source src={headerVideo} type="video/mp4" />
            </video>
        </header>
    )
}
export default Header