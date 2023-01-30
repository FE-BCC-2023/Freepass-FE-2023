import React from "react";
import logo from "/assets/logo/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function Navbar() {
	const [sidebarActive, setSidebarActive] = useState(false);
	const [navbarFixed, setNavbarFixed] = useState(false);
	useEffect(() => {
		const winSize = window.addEventListener("resize", () => {
			if (window.innerWidth > 767) {
				setSidebarActive(false);
			}
		});
		return () => {
			removeEventListener("resize", winSize);
		};
	}, [sidebarActive]);
	useEffect(() => {
		window.sessionStorage.clear();
		const scrollWindow = window.addEventListener("scroll", () => {
			if (window.scrollY > 500) {
				setNavbarFixed(true);
			} else if (window.scrollY === 0) {
				setNavbarFixed(false);
			}
		});
		return () => {
			removeEventListener("scroll", scrollWindow);
		};
	}, []);
	return (
		<div
			id="navbar"
			className={` ${
				navbarFixed ? "fixed left-0 right-0 top-0 bg-blue-600" : "relative"
			}  bg-white h-[15vh] flex items-center z-50 transition-colors duration-300`}
		>
			{sidebarActive && (
				<div
					id="overlay"
					className="bg-[rgba(0,0,0,0.15)] opacity-90 fixed top-0 bottom-0 left-0 right-0"
				></div>
			)}
			<div className="container mx-auto px-3 md:py-3">
				<div className="flex items-center justify-between lg:px-8">
					<Link to={"/"}>
						<img
							src={logo}
							alt="logo"
							className="w-20"
						/>
					</Link>
					<div
						id="menubar"
						className={`${
							sidebarActive ? "translate-x-0" : "translate-x-full"
						} absolute md:static md:flex md:translate-x-0 right-0 top-0 md:h-fit h-screen w-64 md:w-auto bg-gray-50  md:backdrop-blur-none backdrop-blur-lg md:transition-none  transition-all duration-300`}
					>
						<div className="p-3 md:hidden">
							<button
								onClick={() => {
									setSidebarActive(!sidebarActive);
								}}
								className="ml-auto block"
							>
								<img
									src="/close-icon.svg"
									alt="close-btn"
									className=" block w-9 h-9"
								/>
							</button>
						</div>
						<ul
							className={`mt-16 md:mt-0 md:flex  md:w-80 justify-between ${
								navbarFixed ? "bg-blue-600" : "bg-white"
							} transition-colors duration-300`}
						>
							{["About", "Contact", "My Quiz"].map((el, i) => {
								return (
									<li
										key={i}
										className="hover:bg-slate-200 md:hover:bg-primary group md:hover:-translate-y-2 md:hover:shadow-md transition-colors md:transition-all duration-200  text-center py-3 mb-2 md:m-0 md:px-3 lg:px-4 md:py-3 md:rounded-md"
									>
										<Link
											className={`text-xl md:text-xl md:font-medium block md:group-hover:text-white ${
												navbarFixed ? "text-white" : "text-black"
											}`}
											to={"#"}
										>
											{el}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<button
						onClick={() => {
							setSidebarActive(!sidebarActive);
						}}
						className="md:hidden"
					>
						<img
							src="/menu-icon.svg"
							alt="hum-btn"
							className="w-9"
						/>
					</button>
				</div>
			</div>
		</div>
	);
}
