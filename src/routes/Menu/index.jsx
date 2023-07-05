import { motion } from "framer-motion"

import LimsaLateNight from '../../assets/img/latenightlimsa.jpg'
import Kefka from '../../assets/img/kefkamorningstar.jpg'
import Winter from '../../assets/img/coerthanwinter.jpg'
import Sunrise from '../../assets/img/gyrabaniansunrise.jpg'
import AeonRain from '../../assets/img/aeonrain.jpg'
import IciesFocus from '../../assets/img/iciesfocus.jpg'
import ShivaSlush from '../../assets/img/shivaslush.jpg'
import Pretzel from '../../assets/img/pretzel.jpg'
import BlueMuffin from '../../assets/img/bluevelvet.jpg'
import Candy from '../../assets/img/randycandy.jpg'

import VideoBG from '../../assets/img/videobg.mp4'
import Frost from '../../assets/img/frost-long.gif'

import './Menu.scss'

const Menu = () => {
    return (
        <>
            <motion.div
                key="bar-menu"
                id="menu" className="route"
                initial={{ rotateX: -70, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.39
                }}
                exit={{ rotateX: 70, opacity: 0 }}
                >
                <div className="menu-wrapper">
                    <video className="video-bg" src={VideoBG} autoPlay muted loop controls='' />
                    <div className="scroll-wrapper">
                        <h2>Cocktails</h2>
                        <div className="section-wrapper">
                            <div className="menu-item">
                                <img className="menu-item-hover-image" src={Frost} />
                                <img className="menu-item-image" src={LimsaLateNight} alt="Late Night Limsa Beverage" />
                                <div className="menu-item-info">
                                    <div className="topbar">
                                        <h3>Limsa Late Night</h3>
                                        <span>10,000 gil</span>
                                    </div>
                                    <p>Iced Coffee • Revenant's Toll Bourbon • Maple Syrup</p>
                                </div>
                            </div>
                            <div className="menu-item">
                                <img className="menu-item-hover-image" src={Frost} />
                                <img className="menu-item-image" src={Kefka} alt="Kefka's Morning Star Beverage" />
                                <div className="menu-item-info">
                                    <div className="topbar">
                                        <h3>Kefka's Morning Star</h3>
                                        <span>20,000 gil</span>
                                    </div>
                                    <p>Grape Hard Candy Infused Vodka • Fresh Squeezed Lime Juice • Seltzer • Tamamizu Peppercorn</p>
                                </div>
                            </div>
                            <div className="menu-item">
                                <img className="menu-item-hover-image" src={Frost} />
                                <img className="menu-item-image" src={Winter} alt="Coerthan Winter Beverage" />
                                <div className="menu-item-info">
                                    <div className="topbar">
                                        <h3>Coerthan Winter</h3>
                                        <span>7,000 gil</span>
                                    </div>
                                    <p>Nine Ivies Vodka • Maraschino Liqueur • Shaved Ice • Mint Sprigs • Orange Bitters</p>
                                </div>
                            </div>
                            <div className="menu-item">
                                <img className="menu-item-hover-image" src={Frost} />
                                <img className="menu-item-image" src={Sunrise} alt="Gyr Abania Sunrise Beverage" />
                                <div className="menu-item-info">
                                    <div className="topbar">
                                        <h3>Gyr Abania Sunrise</h3>
                                        <span>8,000 gil</span>
                                    </div>
                                    <p>Fresh Squeezed Orange Juice • Sparkling Wine • Cieldalaen Silver Tequila • Maraschino Cherry • Lime</p>
                                </div>
                            </div>
                            <div className="menu-item">
                                <img className="menu-item-hover-image" src={Frost} />
                                <img className="menu-item-image" src={AeonRain} alt="Aeon Rain Beverage" />
                                <div className="menu-item-info">
                                    <div className="topbar">
                                        <h3>Aeon Rain</h3>
                                        <span>15,000 gil</span>
                                    </div>
                                    <p>Costa Del Sol Dark Rum • Absinthe • Blue Curacao • Fresh Squeezed Lemon Juice • Blackberry Syrup • Black Sugar Rim • Blackberry Skewer</p>
                                </div>
                            </div>
                            <div className="menu-item">
                                <img className="menu-item-hover-image" src={Frost} />
                                <img className="menu-item-image" src={IciesFocus} alt="I'Cie's Focus Beverage" />
                                <div className="menu-item-info">
                                    <div className="topbar">
                                        <h3>I'Cie's Focus</h3>
                                        <span>30,000 gil</span>
                                    </div>
                                    <p>Nine Ivies Vodka • Peppermint Green Tea • Fresh Squeezed Lime Juice • Ginger Beer • Mint • Served in Copper Mug</p>
                                </div>

                            </div>
                            <div className="menu-item">
                                <img className="menu-item-hover-image" src={Frost} />
                                <img className="menu-item-image" src={ShivaSlush} alt="Shiva's Slush Beverage" />
                                <div className="menu-item-info">
                                    <div className="topbar">
                                        <h3>Shiva's Slush</h3>
                                        <span>100,000 gil</span>
                                    </div>
                                    <p>Shiva's Tears Infusion • Coerthan Vodka • Lominsan Coconut Rum • Lily</p>
                                </div>
                            </div>
                        </div>
                        <h2>Pub Grub</h2>
                        <div className="section-wrapper">
                            <div className="menu-item">
                                <img className="menu-item-hover-image" src={Frost} />
                                <img className="menu-item-image" src={Pretzel} alt="Zatoshi Signature Pretzel" />
                                <div className="menu-item-info">
                                    <div className="topbar">
                                        <h3>Zatoshi Signature Pretzel</h3>
                                        <span>10,000 gil</span>
                                    </div>
                                    <p>Dunesfolk Pretzel Bread • Homemade Scorpion Pepper Chili Sauce • Ruby Sea Salt</p>
                                </div>
                            </div>
                            <div className="menu-item">
                                <img className="menu-item-hover-image" src={Frost} />
                                <img className="menu-item-image" src={BlueMuffin} alt="Zatoshi Signature Pretzel" />
                                <div className="menu-item-info">
                                    <div className="topbar">
                                        <h3>Blue Velvet Muffin</h3>
                                        <span>8,000 gil</span>
                                    </div>
                                    <p>Blue Velvet Cake • Blue Vanilla Frosting • Sprinkles • Ice Crystal Garnish</p>
                                </div>
                            </div>
                            <div className="menu-item">
                                <img className="menu-item-hover-image" src={Frost} />
                                <img className="menu-item-image" src={Candy} alt="Zatoshi Signature Pretzel" />
                                <div className="menu-item-info">
                                    <div className="topbar">
                                        <h3>Randy Candy</h3>
                                        <span>5,000 gil</span>
                                    </div>
                                    <p>Blue Velvet Cake • Blue Vanilla Frosting • Sprinkles • Ice Crystal Garnish</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Menu