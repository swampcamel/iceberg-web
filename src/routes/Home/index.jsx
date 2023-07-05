import { motion } from "framer-motion"

import Logo from '../../assets/img/iceberglogo-transparent.png'
import './Home.scss'

const Home = () => {
    return (
        <>
            <motion.div id="home" className="route"
                key="home"
                initial={{ rotateX: -70, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.39
                }}
                exit={{ rotateX: 70, opacity: 0 }}
            >
                <img src={Logo} alt="Logo"/>
            </motion.div>
        </>
    )
}

export default Home