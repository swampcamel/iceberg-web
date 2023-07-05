import { motion } from "framer-motion"

import './ComingSoon.scss'

const ComingSoon = () => {
    return (
        <>
            <motion.div
                key="coming-soon"
                id="coming-soon" className="route"
                initial={{ rotateX: -70, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.39
                }}
                exit={{ rotateX: 70, opacity: 0 }}
            >
                <div className="wrapper">
                    <h1>Coming Soon</h1>
                </div>
            </motion.div>
        </>
    )
}

export default ComingSoon