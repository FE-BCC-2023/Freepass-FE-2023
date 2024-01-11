import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { EffectCoverflow, Pagination } from "swiper";
import quizExpl from "./data/quizExpl";
export default function QuizCard() {
	return (
		<div className="bg-slate-50">
			<div className="container mx-auto py-10 md:py-14">
				<div className="flex flex-col items-center max-w-md mx-auto px-3 mb-6 lg:mb-8">
					<h1 className="text-center text-2xl md:text-3xl capitalize text-orange-400 font-semibold">
						Engage Student with quizez
					</h1>
					<h2 className="text-center md:text-lg mt-2 text-secondaryBlue font-semibold">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
						quia?
					</h2>
				</div>
				<Swiper
					loop={true}
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					breakpoints={{
						300: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1280: {
							slidesPerView: 3,
						},
					}}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: false,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					className="mySwiper "
				>
					{quizExpl.map((el, index) => {
						return (
							<SwiperSlide key={index}>
								<div className="card w-96 bg-base-100 shadow-xl mx-auto">
									<div className="card-body">
										<h2 className="card-title">{el.title}</h2>
										<p>If a dog chews shoes whose shoes does he choose?</p>
									</div>
									<figure>
										<img
											src={el.img}
											alt="Shoes"
											className="h-56 w-full"
										/>
									</figure>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}
