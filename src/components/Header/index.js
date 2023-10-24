import headerVideo from './../../assets/header.mp4'
import hollow from '../../assets/hollow.png'

const Header = () => {
    return (
        <header>
            <img src={hollow} alt="Hollow Knight logo"></img>
            <video src={headerVideo} autoPlay loop muted playsinline>
                {/* <source  type="video/mp4" /> */}
            </video>
        </header>
    )
}
export default Header