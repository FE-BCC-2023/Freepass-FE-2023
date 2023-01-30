import React from "react";
import { Link } from "react-router-dom";
export default function Hero() {
	return (
		<div
			id="hero"
			className="h-[85vh]"
		>
			<div className="container mx-auto py-8 px-3 flex flex-col lg:justify-evenly lg:flex-row-reverse lg:mt-5 items-center ">
				<div className="max-w-lg xl:max-w-xl">
					<img
						src="/assets/hero/hero.png"
						alt="hero-img"
					/>
				</div>
				<div className="max-w-lg xl:max-w-xl mt-2 bg-transparent h-40 lg:h-56 xl:h-64 flex flex-col items-center lg:items-start justify-between px-3">
					<h2 className="text-center lg:text-start text-xl lg:text-2xl xl:text-3xl font-semibold text-secondaryBlue uppercase">
						Build your future now !
					</h2>
					<h1 className="text-center lg:text-start font-semibold text-4xl lg:text-5xl xl:text-6xl">
						<span className="text-primaryOrange">TAKE A</span>
						<span className="text-secondaryBlue"> QUIZ</span>
					</h1>
					<p className="text-center lg:text-start lg:text-lg xl:text-xl text-secondaryBlue font-semibold">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
						sed, ducimus eum tenetur exercitationem fuga.
					</p>
					<Link
						to={"/form"}
						className="btn btn-primary mt-5"
					>
						Let's Do It
					</Link>
				</div>
			</div>
		</div>
	);
}
