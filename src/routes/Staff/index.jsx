import { motion } from 'framer-motion'

import Riven from '../../assets/img/staff/riven-anime.jpg'
import Destiny from '../../assets/img/staff/destiny-anime.jpg'
import Kether from '../../assets/img/staff/kether-anime.jpg'
import NyxlinNormal from '../../assets/img/staff/nyxlin-normal.jpg'
import NyxlinAnime from '../../assets/img/staff/nyxlin-anime.jpg'

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
                    <img className="normal-img" src={NyxlinNormal} />
                    <img className="anime-img" src={NyxlinAnime} />
                </div>
                <div class="member-content">
                    <h3>Nyxlyn Lunara</h3>
                    <h4>Dancer</h4>
                </div>
            </div>
        </div>
    </motion.div>
    )
}

export default Staff