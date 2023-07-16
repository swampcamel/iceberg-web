import { motion } from 'framer-motion'

import Riven from '../../assets/img/staff/riven-anime.jpg'
import Destiny from '../../assets/img/staff/destiny-anime.jpg'
import Kether from '../../assets/img/staff/kether-anime.jpg'

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
                <img src={Riven} />
                <div class="member-content">
                    <h3>Riven Zatoshi</h3>
                    <h4>Owner</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <img src={Destiny} />
                <div class="member-content">
                    <h3>Destiny Zatoshi</h3>
                    <h4>Co-Owner</h4>
                </div>
            </div>
            <div className="member-wrapper">
                <img src={Kether} />
                <div class="member-content">
                    <h3>Kether Malkuth</h3>
                    <h4>Manager</h4>
                </div>
            </div>
        </div>
    </motion.div>
    )
}

export default Staff