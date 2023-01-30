import React from "react";

export default function Footer() {
	return (
		<div
			id="footer"
			className="bg-blue-100"
		>
			<div className="container mx-auto">
				<div>
					<img
						src="/assets/logo/logo.png"
						alt="logo"
						className="w-28"
					/>
				</div>
				<div>
					<div>
						<h3>Features</h3>
						<ul>
							{["About Us", "App", "News"].map((el) => {
								return (
									<li>
										<a href="#">{el}</a>
									</li>
								);
							})}
						</ul>
					</div>
					<div>
						<h3>Learn More</h3>
						<ul>
							<li>
								<a href="#">Connects</a>
							</li>
							<li>
								<a href="#">Faq</a>
							</li>
							<li>
								<a href="#">Terms and conditions</a>
							</li>
							<li>
								<a href="#">Privacy Settings</a>
							</li>
						</ul>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}
