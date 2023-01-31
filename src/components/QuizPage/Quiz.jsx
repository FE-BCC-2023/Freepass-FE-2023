import React from "react";
import useFetch from "../../useFetch.js";
import "./Quiz.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useRef } from "react";
export default function Quiz() {
	const volumeRef = useRef(null);
	useEffect(() => {
		if (volumeRef.current) {
			volumeRef.current.volume = 0.15;
		}
	});

	if (
		window.sessionStorage.getItem("BIO_FORM_DATA") === null ||
		window.sessionStorage.getItem("QUIZ_META_FORM_DATA") === null
	) {
		return <Navigate to={"/"} />;
	}

	const bioFormData = JSON.parse(
		window.sessionStorage.getItem("BIO_FORM_DATA")
	);

	const quizMetaFormData = JSON.parse(
		window.sessionStorage.getItem("QUIZ_META_FORM_DATA")
	);
	const [answerSheets, setAnswerSheets] = useState(
		JSON.parse(window.sessionStorage.getItem("ANSWER_SHEETS"))
	);
	const [numberState, setNumberState] = useState(
		parseInt(window.sessionStorage.getItem("QUIZ_CARD_INDEX"))
	);
	const [sessionData, setSessionData] = useState(
		JSON.parse(window.sessionStorage.getItem("QUIZ_DATA"))
	);
	const rawData = { ...quizMetaFormData };
	rawData["country"] = bioFormData.country;
	const { data, loading, error } = useFetch(
		`https://the-trivia-api.com/api/questions?limit=${rawData.slider}&region=${rawData.country}&categories=${rawData.categories}&difficulty=${rawData.difficulty}`
	);
	const [time, setTime] = useState(
		parseInt(window.sessionStorage.getItem("QUIZ_TIMER"))
	);
	const [timeFormat, setTimeFormat] = useState(0);
	const [isCountDown, setIsCountDown] = useState(true);
	useEffect(() => {
		window.sessionStorage.setItem("QUIZ_CARD_INDEX", numberState);
	}, [numberState]);
	useEffect(() => {
		window.sessionStorage.setItem("QUIZ_TIMER", time);
	}, [time]);
	useEffect(() => {
		window.sessionStorage.setItem(
			"ANSWER_SHEETS",
			JSON.stringify(answerSheets)
		);
	}, [answerSheets]);

	useEffect(() => {
		if (data != null) {
			if (window.sessionStorage.getItem("QUIZ_DATA") == null) {
				const shuffledData = shuffleArray(data);
				window.sessionStorage.setItem(
					"QUIZ_DATA",
					JSON.stringify(shuffledData)
				);
				setSessionData(JSON.parse(window.sessionStorage.getItem("QUIZ_DATA")));
			}
		}
	}, [data]);
	useEffect(() => {
		if (isCountDown) {
			const timer = setInterval(() => {
				setTime((time) => time - 1);
			}, 1000);
			return () => {
				clearInterval(timer);
			};
		}
	}, [isCountDown]);
	useEffect(() => {
		if (time <= 0) {
			handleSubmitAnswer();
			setIsCountDown(false);
		}

		let minute = Math.floor(time / 60);
		let second = time % 60;
		setTimeFormat(`${minute}m : ${second}s`);
	}, [time]);

	if (!isCountDown) {
		return (
			<Navigate
				to={"/result"}
				replace={true}
			/>
		);
	}
	if (loading || sessionData == null) {
		return (
			<div className="h-screen w-screen bg-gray-200 flex">
				<div className="lds-ring m-auto">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}
	function shuffleArray(data) {
		const result = data.map((el) => {
			const willShuffle = [...el.incorrectAnswers, el.correctAnswer];
			return { ...el, shuffled: shuffle(willShuffle) };
		});
		return result;
	}
	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;

		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	}
	function handleSubmitAnswer() {
		window.sessionStorage.setItem(
			"ANSWER_SHEETS",
			JSON.stringify(answerSheets)
		);
	}
	const handleNextClick = () => {
		setNumberState((numberState) => numberState + 1);
	};
	const handlePrevClick = () => {
		setNumberState((numberState) => numberState - 1);
	};
	const checkIsCorrect = (el) => {
		return el === sessionData[numberState].correctAnswer;
	};
	const deepSearchAnswer = () => {
		for (let i = 0; i < answerSheets.length; i++) {
			if (answerSheets[i].number === numberState) {
				return { bool: true, at: i };
			}
		}
		return { bool: false };
	};
	const handleClickAnswer = (index, el) => {
		if (answerSheets.length < 1) {
			setAnswerSheets([
				...answerSheets,
				{
					number: numberState,
					answer: checkIsCorrect(el),
					activeAnswer: index,
				},
			]);
		} else {
			if (!deepSearchAnswer().bool) {
				setAnswerSheets([
					...answerSheets,
					{
						number: numberState,
						answer: checkIsCorrect(el),
						activeAnswer: index,
					},
				]);
			} else {
				const b = [...answerSheets];
				b[deepSearchAnswer().at] = {
					number: numberState,
					answer: checkIsCorrect(el),
					activeAnswer: index,
				};
				setAnswerSheets(b);
			}
		}
	};
	const searchActiveAnswer = () => {
		const temp = answerSheets.filter((el) => {
			return el.number === numberState;
		});
		if (temp.length == 0) {
			return null;
		} else {
			return temp[0].activeAnswer;
		}
	};
	const handleMultipleChoice = (data) => {
		const isNull = (index) => {
			if (searchActiveAnswer() == null) {
				return null;
			} else {
				return searchActiveAnswer() == index ? "active-choice" : null;
			}
		};

		let choice = data.shuffled;
		return choice.map((el, index) => {
			return (
				<button
					onClick={() => {
						handleClickAnswer(index, el);
					}}
					key={index}
					className={`${isNull(
						index
					)} py-1 px-2 shadow-[0px_0px_2px_2px_rgba(68,6,203,1)] rounded-md hover:bg-sky-600  hover:text-white transition-all duration-200`}
				>
					{el}
				</button>
			);
		});
	};

	return (
		<div className="h-screen w-screen flex">
			<div className="card lg:card-side shadow-xl m-auto w-[90%] lg:max-w-3xl max-w-2xl bg-slate-100">
				<figure>
					<img
						src="/assets/quiz/forest-1.jpg"
						alt="Album"
						className="w-full lg:h-full sm:h-40 sm:block hidden object-cover"
					/>
				</figure>
				<div className="card-body">
					<div className="lg:h-full lg:flex lg:flex-col">
						<div className="flex justify-between">
							<h2 className="card-title">
								Question {numberState + 1} / {rawData.slider}
							</h2>
							<h3 className="font-bold text-2xl">{timeFormat}</h3>
						</div>
						<div className="w-[70vw] max-w-sm md:max-w-md mt-2">
							{sessionData[numberState].question}
						</div>
						<div className="flex flex-col gap-5 mt-5 lg:mt-8">
							{handleMultipleChoice(sessionData[numberState])}
						</div>
						<div className="flex justify-between  gap-2 mt-5 lg:mt-8">
							<div className="flex gap-2">
								{numberState === 0 || (
									<div className="card-actions justify-end">
										<button
											onClick={() => {
												handlePrevClick();
											}}
											className="btn btn-primary"
										>
											Prev
										</button>
									</div>
								)}
								{numberState === sessionData.length - 1 || (
									<div className="card-actions justify-end">
										<button
											onClick={() => {
												handleNextClick();
											}}
											className="btn btn-primary"
										>
											Next
										</button>
									</div>
								)}
							</div>
							<label
								htmlFor="my-modal-3"
								className="btn btn-secondary"
							>
								SUBMIT
							</label>
							<input
								type="checkbox"
								id="my-modal-3"
								className="modal-toggle"
							/>
							<div className="modal">
								<div className="modal-box relative">
									<label
										htmlFor="my-modal-3"
										className="btn btn-sm btn-circle absolute right-2 top-2"
									>
										✕
									</label>
									<h3 className="text-lg font-bold">
										Are you sure want to submit?
									</h3>
									<div className="flex justify-end mt-8">
										<Link
											to={"/result"}
											onClick={() => {
												handleSubmitAnswer();
											}}
											className="btn btn-success"
										>
											YES
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
