import { motion } from 'framer-motion'

import GambaPic from '../../assets/img/naughty-gamba.jpg'
import PokerBG from '../../assets/img/poker-bg.mp4'

import './Casino.scss'

const Casino = () => {
    return (
        <motion.div
            key="casino"
            id="casino" className="route"
            initial={{ rotateX: -70, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.39
            }}
            exit={{ rotateX: 70, opacity: 0 }}
        >
            <div className="wrapper">
                <img src={GambaPic} alt="a sexy blackjack dealing miqo'te girl" />
                    <video className="video-bg" src={PokerBG} autoPlay muted loop controls='' />
                <div className="casino-content">
                    <h1>Naughty Blackjack</h1>
                    <h2>House Rules</h2>
                    <h3>Minimum Bet: 50,000 gil | Maximum Bet: 500,000 gil<br/>VIP Max Bet: 1,000,000 gil</h3>
                    <h3></h3>
                    <p>If the <strong>player</strong> gets a 21, the dealer loses a piece of clothing</p>
                    <p>If the <strong>dealer</strong> gets a 21, the dealer reclaims a piece of clothing</p>
                    <p>Claim the dealer's last piece of clothing to win a striptease at the table</p>
                    <div className="divider">_</div>
                    <h3>The Cards</h3>
                    <p className="cards">
                        <span className="card-value"> 1 = Ace (1 or 11)</span> <span>•</span>
                        <span className="card-value"> 11 = Jack (10)</span> <span>•</span>
                        <span className="card-value"> 12 = Queen (10)</span> <span>•</span>
                        <span className="card-value"> 13 = King (10)</span>
                    </p>
                    <p>Blackjack (Natural 21) pays 3:2 or 2.5x the original bet</p>
                    <p>Dealer hits until reaching a total of 17 or more</p>
                    <div className="divider">_</div>
                    <h3>Double Down & Split</h3>
                    <p>Players may double down (starting hand only) <strong>OR</strong> split once</p>
                    <p>Players lose their double down bet in the event of a push</p>
                    <h3>Moon Magic and turning on Battle Effects is recommended!</h3>
                </div>
            </div>            
        </motion.div>
    )
}

export default Casino