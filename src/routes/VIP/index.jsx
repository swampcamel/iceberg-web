import { motion } from 'framer-motion'

import './VIP.scss'

const VIP = () => {
    return (
        <>
            <motion.div
                key="vip"
                id="vip" className="route"
                initial={{ rotateX: -70, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.39
                }}
                exit={{ rotateX: 70, opacity: 0 }}            
            >
                <div className="vip-wrapper">
                    <div className="option-wrapper">
                        <h3>Frosty League</h3>
                        <h4>Nightly • 500k gil</h4>
                        <ul>
                            <li>Nightly Syncshell Access</li>
                            <li>Club Shout Out</li>
                            <li>Free Drinks (excludes Shiva)</li>
                            <li>Increase Gamba Limit to 1 Mil</li>
                        </ul>
                    </div>
                    <div className="option-wrapper">
                        <h3>Blizzy League</h3>
                        <h4>Monthly • 3 mil gil</h4>
                        <ul>
                            <li>Syncshell Access</li>
                            <li>Free Drinks (excludes Shiva)</li>
                            <li>250k Gamba Credit for the Month</li>
                            <li>Discord Role</li>
                            <li>Increase Gamba Limit to 1 Mil</li>
                            <li>1 Hour NSFW Time with a Court of your Choice (with Court's Consent)</li>
                        </ul>
                    </div>
                    <div className="option-wrapper">
                        <h3>Yeti League</h3>
                        <h4>6 months • 15 mil gil</h4>
                        <ul>
                            <li>Syncshell Access</li>
                            <li>Free Drinks (excludes Shiva)</li>
                            <li>500k Gamba Credit for the Month</li>
                            <li>Discord Role</li>
                            <li>Increase Gamba Limit to 1 Mil</li>
                            <li>2 Hour NSFW Time with a Court of your Choice (with Court's Consent)</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default VIP