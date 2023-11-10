import { motion } from 'framer-motion'

import Riven from '../../assets/img/staff/riven-anime.jpg'
import DestinyNormal from '../../assets/img/staff/destiny.jpg'
import Kether from '../../assets/img/staff/kether-anime.jpg'
import DulcNormal from '../../assets/img/staff/dulcenia-normal.jpg'
import DulcAnime from '../../assets/img/staff/dulcenia-anime.jpg'
import KehdaNormal from '../../assets/img/staff/keyda-normal.jpg'
import KehdaAnime from '../../assets/img/staff/keyda-anime.jpg'
import DelbeeNormal from '../../assets/img/staff/delbee-normal.jpg'
import DelbeeAnime from '../../assets/img/staff/delbee-anime.jpg'
import IsbeilNormal from '../../assets/img/staff/isbeil-normal.jpg'
import IsbeilAnime from '../../assets/img/staff/isbeil-anime.jpg'
import VictorNormal from '../../assets/img/staff/victor-normal.jpg'
import VictorAnime from '../../assets/img/staff/victor-anime.jpg'
import BlakeNormal from '../../assets/img/staff/blake-normal.jpg'
import BlakeAnime from '../../assets/img/staff/blake-anime.jpg'
import HikuiNormal from '../../assets/img/staff/hikui-normal.jpg'
import HikuiAnime from '../../assets/img/staff/hikui-anime.jpg'
import CornNormal from '../../assets/img/staff/corn-normal.jpg'
import CornAnime from '../../assets/img/staff/corn-anime.jpg'
import HokuNormal from '../../assets/img/staff/hoku-normal.jpg'
import HokuAnime from '../../assets/img/staff/hoku-anime.jpg'
import SnowNormal from '../../assets/img/staff/snow-normal.jpg'
import SnowAnime from '../../assets/img/staff/snow-anime.jpg'
import UmbraNormal from '../../assets/img/staff/umbra-normal.jpg'
import UmbraAnime from '../../assets/img/staff/umbra-anime.jpg'

import './Staff.scss'

const Staff = () => {
    return (
        <motion.div
        key="staff"
        id="staff" className="route"
        initial={{ rotateX: -70, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{
            ease: "easeInOut",
            duration: 0.39
        }}
        exit={{ rotateX: 70, opacity: 0 }} 
    >
        <div className = "staff-wrapper">
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img src={Riven} />
                </div>
                <div class="member-content">
                    <h3>Riven Zatoshi</h3>
                    <h4>Owner</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img src={DestinyNormal} />
                </div>
                <div class="member-content">
                    <h3>Destiny Zatoshi</h3>
                    <h4>Co-Owner</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img src={Kether} />
                </div>
                <div class="member-content">
                    <h3>Kether Malkuth</h3>
                    <h4>Manager</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img className="normal-img" src={DulcNormal} />
                    <img className="anime-img" src={DulcAnime} />
                </div>
                <div class="member-content">
                    <h3>Dulcenia Lifebringer</h3>
                    <h4>Staff Director</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img className="normal-img" src={KehdaNormal} />
                    <img className="anime-img" src={KehdaAnime} />
                </div>
                <div class="member-content">
                    <h3>Kehda Tyeres</h3>
                    <h4>Bar Manager</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img className="normal-img" src={HikuiNormal} />
                    <img className="anime-img" src={HikuiAnime} />
                </div>
                <div class="member-content">
                    <h3>Hikui Sensha</h3>
                    <h4>Photographer</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img className="normal-img" src={BlakeNormal} />
                    <img className="anime-img" src={BlakeAnime} />
                </div>
                <div class="member-content">
                    <h3>Blake Sfangs</h3>
                    <h4>Photographer</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img className="normal-img" src={IsbeilNormal} />
                    <img className="anime-img" src={IsbeilAnime} />
                </div>
                <div class="member-content">
                    <h3>Isbeil Keten</h3>
                    <h4>Game Master</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img className="normal-img" src={UmbraNormal} />
                    <img className="anime-img" src={UmbraAnime} />
                </div>
                <div class="member-content">
                    <h3>Umbra</h3>
                    <h4>🖤Patron Saint🖤</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img className="normal-img" src={DelbeeNormal} />
                    <img className="anime-img" src={DelbeeAnime} />
                </div>
                <div class="member-content">
                    <h3>Delbee Es</h3>
                    <h4>Dancer</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img className="normal-img" src={HokuNormal} />
                    <img className="anime-img" src={HokuAnime} />
                </div>
                <div class="member-content">
                    <h3>Queen Hoku</h3>
                    <h4>Dancer</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img className="normal-img" src={SnowNormal} />
                    <img className="anime-img" src={SnowAnime} />
                </div>
                <div class="member-content">
                    <h3>Snow Angel</h3>
                    <h4>Dancer</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img className="normal-img" src={CornNormal} />
                    <img className="anime-img" src={CornAnime} />
                </div>
                <div class="member-content">
                    <h3>Cornelius Crown</h3>
                    <h4>Enforcer</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img className="normal-img" src={VictorNormal} />
                    <img className="anime-img" src={VictorAnime} />
                </div>
                <div class="member-content">
                    <h3>Victor Umbriel</h3>
                    <h4>Security</h4>
                </div>
            </div>
        </div>
    </motion.div>
    )
}

export default Staff