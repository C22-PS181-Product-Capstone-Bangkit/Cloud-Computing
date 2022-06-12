import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, EffectFade } from "swiper";
import {
  StarIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
  HeartIcon,
} from "@heroicons/react/solid";
import "swiper/css";
import "swiper/css/effect-fade";
import {
  Phone,
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
} from "../assets/img";

function Features() {
  const [swiper, setSwiper] = useState({ snapIndex: 1 });
  const [count, setCount] = useState(1);
  return (
    <div id="feature" className="lg:mx-16 md:mx-12 mx-4">
      <h1 className="text-center font-bold text-5xl pt-28 mb-16">Features</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-2 grid-cols-1 gap-4">
        <section
          onClick={() => swiper.slideTo(2)}
          className={`lg:row-start-1 md:row-start-3 row-start-3 p-8 my-3 rounded-xl shadow-md ${
            count === 2
              ? "bg-gradient-to-r from-white to-cyan-50"
              : "background-white "
          }`}
        >
          <div className="flex items-center">
            <QuestionMarkCircleIcon
              className={`p-2 mr-4 bg-white border-2 text-cyan-410 h-16 w-16 rounded-md ${
                count === 2 ? "border-gray-400" : "border-gray-200"
              }`}
            />
            <h1
              className={`font-bold text-xl  ${
                count === 2 ? "text-cyan-410" : "text-black"
              }`}
            >
              Rekomendasi Makanan
            </h1>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Bingung makan apa? Yuk lihat-lihat makanan
          </p>
        </section>
        <div className="md:row-span-2 md:col-span-2 lg:col-span-1 md:mb-36 h-96 mb-40 mt-5">
          <img
            src={Phone}
            alt="phone"
            className="absolute left-0 right-0 mx-auto w-60"
          />
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            effect={"fade"}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSlideChange={() => setCount(swiper.snapIndex)}
            onSwiper={(swiper) => {
              setSwiper(swiper);
              setCount(swiper.snapIndex);
            }}
            modules={[Autoplay, Controller, EffectFade]}
            className="absolute left-0 right-0 w-52 mt-3.5 -z-10"
          >
            <SwiperSlide>
              <img src={Screen1} className="mx-auto" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Screen5} className="mx-auto" alt="recommend" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Screen2} className="mx-auto" alt="search" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Screen3} className="mx-auto" alt="detail" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Screen4} className="mx-auto" alt="history" />
            </SwiperSlide>
          </Swiper>
        </div>
        <section
          onClick={() => swiper.slideTo(3)}
          className={`lg:col-start-1 lg:row-start-2 md:col-start-2 md:row-start-3 row-start-4 p-8 my-3 rounded-xl shadow-md ${
            count === 3
              ? "bg-gradient-to-r from-white to-cyan-50"
              : "background-white "
          }`}
        >
          <div className="flex items-center">
            <HeartIcon
              className={`p-2 mr-4 bg-white border-2 text-cyan-410 h-16 w-16 rounded-md ${
                count === 3 ? "border-gray-400" : "border-gray-200"
              }`}
            />
            <h1
              className={`font-bold text-xl  ${
                count === 3 ? "text-cyan-410" : "text-black"
              }`}
            >
              Tampilan Berbagai Restoran
            </h1>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Beragam kunjungan restoran berdasarkan kategori, lokasi terdekat
          </p>
        </section>
        <section
          onClick={() => swiper.slideTo(4)}
          className={`p-8 my-3 rounded-xl shadow-md lg:col-start-3 lg:row-start-1 md:row-start-4 row-start-5 ${
            count === 4
              ? "bg-gradient-to-r from-white to-cyan-50"
              : "background-white "
          }`}
        >
          <div className="flex items-center">
            <StarIcon
              className={`p-2 mr-4 bg-white border-2 text-cyan-410 h-16 w-16 rounded-md ${
                count === 4 ? "border-gray-400" : "border-gray-200"
              }`}
            />
            <h1
              className={`font-bold text-xl  ${
                count === 4 ? "text-cyan-410" : "text-black"
              }`}
            >
              Detail Restoran
            </h1>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Detail restoran dengan ulasan dan lokasi restoran
          </p>
        </section>

        <section
          onClick={() => swiper.slideTo(5)}
          className={` p-8 my-3 rounded-xl shadow-md lg:col-start-3 lg:row-start-2 md:row-start-4 row-start-6 ${
            count === 5
              ? "bg-gradient-to-r from-white to-cyan-50"
              : "background-white"
          }`}
        >
          <div className="flex items-center">
            <PencilIcon
              className={`p-2 mr-4 bg-white border-2 text-cyan-410 h-16 w-16 rounded-md ${
                count === 5 ? "border-gray-400" : "border-gray-200"
              }`}
            />
            <h1
              className={`font-bold text-xl  ${
                count === 5 ? "text-cyan-410" : "text-black"
              }`}
            >
              Ulasan Restoran
            </h1>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Berikan pendapatmu tentang restoran
          </p>
        </section>
      </div>
    </div>
  );
}

export default Features;
