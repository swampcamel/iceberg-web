import { motion } from 'framer-motion'

import Riven from '../../assets/img/staff/riven-anime.jpg'
import Destiny from '../../assets/img/staff/destiny-anime.jpg'
import Kether from '../../assets/img/staff/kether-anime.jpg'
import NyxlinNormal from '../../assets/img/staff/nyxlin-normal.jpg'
import NyxlinAnime from '../../assets/img/staff/nyxlin-anime.jpg'
import DulcNormal from '../../assets/img/staff/dulcenia-normal.jpg'
import DulcAnime from '../../assets/img/staff/dulcenia-anime.jpg'
import KehdaNormal from '../../assets/img/staff/keyda-normal.jpg'
import KehdaAnime from '../../assets/img/staff/keyda-anime.jpg'
import DelbeeNormal from '../../assets/img/staff/delbee-normal.jpg'
import DelbeeAnime from '../../assets/img/staff/delbee-anime.jpg'
import SylviaNormal from '../../assets/img/staff/sylvia-normal.jpg'
import SylviaAnime from '../../assets/img/staff/sylvia-anime.jpg'
import IsbeilNormal from '../../assets/img/staff/isbeil-normal.jpg'
import IsbeilAnime from '../../assets/img/staff/isbeil-anime.jpg'
import KureiNormal from '../../assets/img/staff/kurei-normal.jpg'
import KureiAnime from '../../assets/img/staff/kurei-anime.jpg'

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
                    <img src={Destiny} />
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
                    <img className="normal-img" src={SylviaNormal} />
                    <img className="anime-img" src={SylviaAnime} />
                </div>
                <div class="member-content">
                    <h3>Sylvia Vale</h3>
                    <h4>Courtesan Manager</h4>
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
                    <img className="normal-img" src={KureiNormal} />
                    <img className="anime-img" src={KureiAnime} />
                </div>
                <div class="member-content">
                    <h3>Kurei Takumi</h3>
                    <h4>Courtesan</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <div className="img-wrapper">
                    <img className="normal-img" src={NyxlinNormal} />
                    <img className="anime-img" src={NyxlinAnime} />
                </div>
                <div class="member-content">
                    <h3>Nyxlyn Lunara</h3>
                    <h4>Dancer</h4>
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
        </div>
    </motion.div>
    )
}

export default Staff