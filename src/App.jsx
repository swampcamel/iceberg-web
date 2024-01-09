import { Routes, Route, useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade  } from 'swiper'
import { AnimatePresence } from "framer-motion"
import { TwitchPlayer } from 'react-twitch-embed'

import Home from './routes/Home'
import Events from './routes/Events'
import Menu from './routes/Menu'
import VIP from './routes/VIP'
import Casino from './routes/Casino'
import Staff from './routes/Staff'

import Navbar from './components/Navbar'

import Slide1 from './assets/img/iceberg-outside.jpg'
import Slide2 from './assets/img/iceberg-parlor.jpg'
import Slide3 from './assets/img/iceberg-stage.jpg'
import Slide4 from './assets/img/iceberg-dancefloor.jpg'
import Slide5 from './assets/img/iceberg-bar.jpg'

import 'swiper/css'
import 'swiper/css/autoplay'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import 'swiper/css/effect-fade';
import './App.scss'

dayjs.extend(utc);
dayjs.extend(timezone);

const checkTime = () => {
    // Get the current time in EST timezone
    const nowEST = dayjs().tz('America/New_York');
    const currentDay = nowEST.day();
    const currentHour = nowEST.hour();


 if  (currentHour >= 22 && currentHour < 24 && currentDay === 1 ) {
    return { channel: "axisamp_" }
 } else if ( currentHour < 2 && currentDay === 1) {
    return { channel: "vox_ncv"}
 } else {
    return { video: "1970848993" }
 }
}

function App() {

    const location = useLocation();

  return (
    <>
      <div className='app'>
          <Navbar />
          <TwitchPlayer
            className="twitch-player" 
            autoplay="false"
            width="320"
            height="150"
            {...checkTime()}
          />
          <Swiper
            modules={[Autoplay, EffectFade]}
            slidesPerView={1}
            autoplay={{
              delay: 15000
            }}
            loop={true}
            loopedSlides={3}
            speed={800}
            effect="fade"
            className="slider1"
          >
            <SwiperSlide><img id="slide1" src={Slide1} /></SwiperSlide>
            <SwiperSlide><img id="slide2" src={Slide2} /></SwiperSlide>
            <SwiperSlide><img id="slide3" src={Slide3} /></SwiperSlide>
            <SwiperSlide><img id="slide4" src={Slide4} /></SwiperSlide>
            <SwiperSlide><img id="slide5" src={Slide5} /></SwiperSlide>

          </Swiper>
          <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/casino" element={<Casino />} />
                    <Route path="/vip" element={<VIP />} />
                    <Route path="/staff" element={<Staff />} />

                </Routes>
          </AnimatePresence>
        </div>
    </>
  )
}

export default App
