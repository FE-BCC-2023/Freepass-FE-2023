import React from "react";
import sunTornado from "/assets/result/sun-tornado.svg";
import { Link, useLocation, Navigate } from "react-router-dom";
export default function Result() {
	if (
		window.sessionStorage.getItem("BIO_FORM_DATA") === null ||
		window.sessionStorage.getItem("QUIZ_META_FORM_DATA") === null
	) {
		return <Navigate to={"/"} />;
	}
	const state = JSON.parse(window.sessionStorage.getItem("ANSWER_SHEETS"));
	const quizCount = Array.from(
		JSON.parse(window.sessionStorage.getItem("QUIZ_DATA"))
	).length;
	const nameParticipant = JSON.parse(
		window.sessionStorage.getItem("BIO_FORM_DATA")
	).name;
	const countCorrectAnswer = () => {
		let counter = 0;
		for (let i in state) {
			if (state[i].answer === true) {
				counter++;
			}
		}
		return counter;
	};
	const countWrongAnswer = () => {
		return state.length - countCorrectAnswer();
	};
	const countEmptyAnswer = () => {
		return quizCount - state.length;
	};
	const handleResetAnswerSheets = () => {
		window.sessionStorage.removeItem("ANSWER_SHEETS");
	};
	// console.log(state);
	return (
		<div className="flex h-screen">
			<div className="card card-compact w-[80%] max-w-2xl bg-base-100 shadow-xl  m-auto">
				<figure className="">
					<img
						src={sunTornado}
						alt="Learn boy"
						className="object-cover h-36 w-full md:h-40 lg:h-44"
					/>
				</figure>
				<div className="card-body">
					<h1 className="card-title text-center text-2xl w-fit mx-auto">
						Thanks For Completing Quiz !
					</h1>
					<div className="py-2 px-4 bg-cyan-700 w-fit mx-auto rounded-lg max-w-sm">
						<h2 className="text-center text-xl italic font-semibold text-white">
							{nameParticipant}
						</h2>
					</div>
					<p className="text-center text-xl font-semibold">
						Your overall score
					</p>
					<h3 className="text-center text-5xl font-bold">
						{Math.floor((countCorrectAnswer() / quizCount) * 100)}
					</h3>
					<div className="overflow-x-auto mt-3">
						<table className="table w-full">
							<thead>
								<tr>
									<th>Correct Answer</th>
									<th>Wrong Answer</th>
									<th>Not Answered</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{countCorrectAnswer()}</td>
									<td>{countWrongAnswer()}</td>
									<td>{countEmptyAnswer()}</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="flex justify-center md:justify-end gap-x-3 mt-2 lg:mt-5">
						<label
							htmlFor="my-modal"
							className="btn btn-primary"
						>
							Try Again
						</label>
						<input
							type="checkbox"
							id="my-modal"
							className="modal-toggle"
						/>
						<div className="modal">
							<div className="modal-box">
								<h3 className="font-bold text-lg">Are you sure ?</h3>
								<div className="modal-action">
									<label
										htmlFor="my-modal"
										className="btn"
									>
										NOPE!
									</label>
									<Link
										to={"/quiz"}
										onClick={() => {
											handleResetAnswerSheets();
										}}
										className="btn btn-primary"
									>
										Yuppies
									</Link>
								</div>
							</div>
						</div>
						<Link
							to={"/"}
							className="card-actions"
						>
							<button className="btn btn-primary">Home</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
