import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import { BsFillStarFill } from "react-icons/bs";
import reviews from "./data/reviews";
export default function ReviewsCard() {
	return (
		<div>
			<div className="container mx-auto py-10 md:py-14">
				<div className="flex flex-col items-center max-w-md w-[80%]  mx-auto lg:p-5 p-2 mb-6 lg:mb-10 bg-white shadow-md rounded-md">
					<h1 className="text-center text-2xl md:text-3xl capitalize text-orange-400 font-semibold">
						What our costumers saying
					</h1>
					<h2 className="text-center md:text-lg mt-2 text-secondaryBlue font-semibold">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
						quia?
					</h2>
				</div>
				<div className="w-[90%] max-w-lg mx-auto">
					<Swiper
						pagination={{
							type: "progressbar",
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className="mySwiper"
					>
						{reviews.map((el, index) => {
							return (
								<SwiperSlide key={index}>
									<div className=" w-[70%] mx-auto mt-1">
										<div className="p-4 bg-white rounded-md shadow-md">
											<p>{el.text}</p>
										</div>
										<div className="mt-2 p-2 bg-white rounded-md shadow-md flex">
											<figure>
												<img
													src={el.pic}
													alt={el.nama}
													className="h-12 w-12 rounded-full"
												/>
											</figure>
											<div className="px-3">
												<h5 className="text-base font-semibold">{el.nama}</h5>
												<div className="flex">
													<BsFillStarFill
														size={15}
														color="gold"
													/>
													<BsFillStarFill
														size={15}
														color="gold"
													/>
													<BsFillStarFill
														size={15}
														color="gold"
													/>
													<BsFillStarFill
														size={15}
														color="gold"
													/>
													<BsFillStarFill
														size={15}
														color="gold"
													/>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</div>
	);
}
