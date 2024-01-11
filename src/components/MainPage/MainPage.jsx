import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { useEffect } from "react";
import QuizCard from "./QuizCard";
import ReviewsCard from "./ReviewsCard";

export default function MainPage(props) {
	const setIsBioForm = props.setBioForm;
	useEffect(() => {
		setIsBioForm(true);
	}, []);
	return (
		<div>
			<Navbar />
			<Hero />
			<QuizCard />
			<ReviewsCard />
		</div>
	);
}
