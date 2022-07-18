import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import './index.scss';

let flag = true;
let endCurrentX = null;

function SelfScroll() {
    const data = [1, 2, 3, 4, 5];

    return (
        <div className="self-banner">
            <div className="wrap-banner">
                <Swiper
                    spaceBetween={40}
                    slidesPerView={2.5}
                    freeMode={true}
                    onTouchEnd={() => {
                        endCurrentX = null;

                        // console.log(endCurrentX);
                    }}
                    onSliderMove={(swiper, event) => {
                        if ( !endCurrentX && swiper.isEnd) {
                            endCurrentX = swiper.touches.currentX;
                            flag = false;

                            console.log('end currentX:', endCurrentX);
                        }

                        if (!flag && endCurrentX && swiper.isEnd && endCurrentX - swiper.touches.currentX >= 150) {
                            flag = true;

                            window.confirm('是否跳转新页面');
                        }
                    }}
                >

                    {
                        data.map(banner => {
                            return (
                                <SwiperSlide
                                    key={banner}
                                    className="banner-item"
                                >
                                    <div>{banner}</div>
                                </SwiperSlide>
                            );
                        })
                    }

                    <SwiperSlide>
                        <div className="banner-item banner-more">滑动加载更多</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default SelfScroll;
