// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SliderFuture from '../../../../../Assest/SliderFuture.png'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export const SliderTopSection = () => {
    return (
        <div className='swiperCont'>
            <Swiper

                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: '.my-custom-prev',
                    nextEl: '.my-custom-next',
                }}
                autoplay={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide
                    className='swiperSlide'>
                    <img src={SliderFuture} alt="" />
                </SwiperSlide>
                <SwiperSlide
                    className='swiperSlide'>
                    <img src={SliderFuture} alt="" />
                </SwiperSlide>
                <SwiperSlide
                    className='swiperSlide'>
                    <img src={SliderFuture} alt="" />
                </SwiperSlide>
                <SwiperSlide
                    className='swiperSlide'>
                    <img src={SliderFuture} alt="" />
                </SwiperSlide>

                <div className='paginationCont'>
                    <div className="my-custom-prev"><BsArrowRightShort className='icon' /></div>
                    <div className="my-custom-prev"><BsArrowLeftShort className='icon' /></div>
                </div>
                
            </Swiper >
        </div >
    )
}
