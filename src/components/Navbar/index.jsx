import Logo from '../../assets/img/ig-logo-sm.png'
import { Link } from 'react-router-dom'

import Events from '../../assets/img/events-icon.png'
import Bar from '../../assets/img/bar-icon.png'
import Casino from '../../assets/img/casino-icon.png'
import VIP from '../../assets/img/vip-icon.png'
import Staff from '../../assets/img/staff-icon.png'
import Discord from '../../assets/img/discord-icon.png'

import './Navbar.scss'

const Navbar = () => {
    
    return (
        <>
            <div className="nav-wrapper">
                <Link className="logo" to="/">
                    <img  src={Logo} />
                </Link>

                <nav>
                    <Link to="/events" className="menu-tile">
                        <img src={Events} alt="Events" />
                        <span>Events</span>
                    </Link>
                    <Link to="/menu" className="menu-tile">
                        <img src={Bar} alt="Menu" />
                        <span>Bar</span>
                    </Link>
                    <Link to="/casino" className="menu-tile">
                        <img src={Casino} alt="Casino" />
                        <span>Casino</span>
                    </Link>
                    <Link to="/vip" className="menu-tile">
                        <img src={VIP} alt="VIP" />
                        <span>VIP</span>
                    </Link>
                    <Link to="/staff" className="menu-tile">
                        <img src={Staff} alt="Staff" />
                        <span>Staff</span>
                    </Link>
                    <Link to="https://discord.gg/4fBcvxv2Pj" className="menu-tile">
                        <img src={Discord} alt="Discord" />
                        <span>Discord</span>
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Navbar