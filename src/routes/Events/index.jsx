import { motion } from 'framer-motion'

import Latest from '../../assets/img/07-17-2023.mp4'
import './Events.scss'

const Events = () => {
    return (
        <>
            <motion.div
                key="events"
                id="events" className="route"
                initial={{ rotateX: -70, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.39
                }}
                exit={{ rotateX: 70, opacity: 0 }}
            >
                <video src={Latest} muted autoPlay loop/>
            </motion.div>
        </>
    )
}

export default Events