import { motion } from "framer-motion"

import Latest from '../../assets/img/07-10-23-iceberg.gif'
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
                <img src={Latest} alt="07-10-23 Event Poster"/>
            </motion.div>
        </>
    )
}

export default Events