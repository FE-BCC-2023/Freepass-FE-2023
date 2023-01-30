import React from "react";
import { useState } from "react";
import { AppContext } from "../../App";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useFetch from "../../useFetch";
import { useRef } from "react";
import { Link } from "react-router-dom";

const schema = yup
	.object({
		categories: yup.string().required("Please choose categories"),
		slider: yup.string().required(),
		difficulty: yup.string().required("Please choose difficulty"),
		minute: yup.number().required(),
	})
	.required();
export const BtnContainerQuizMetaForm = () => {
	const { isBioForm, setIsBioForm } = useContext(AppContext);

	return (
		<div className="flex mt-5 justify-end gap-x-3">
			<div className="card-actions justify-end">
				<button
					onClick={() => {
						setIsBioForm(true);
					}}
					type="button"
					className="btn btn-warning"
				>
					Prev
				</button>
			</div>
			<div className="card-actions justify-end">
				<button
					type="submit"
					className="btn btn-primary"
				>
					Start
				</button>
			</div>
		</div>
	);
};
export default function QuizMetaForm(props) {
	const { dataFormQuizMeta, setDataFormQuizMeta } = props.formProps;
	const startBtnRef = useRef(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (dataLog) => {
		startBtnRef.current.checked = true;
		setDataFormQuizMeta(dataLog);
	};
	const [limitNumber, setLimitNumber] = useState(5);
	const [limitTime, setLimitTime] = useState(1);
	const { data, loading, error } = useFetch(
		"https://the-trivia-api.com/api/categories"
	);
	const objectToArray = (data) => {
		let arr = [];
		for (const i in data) {
			arr.push({ text: i, value: data[i] });
		}
		return arr;
	};
	const funcSelect = () => {
		if (loading) {
			return <div className="skeleton h-10 rounded-md"></div>;
		}
		return (
			<select
				className="select select-bordered"
				defaultValue={""}
				id="categories"
				name="categories"
				{...register("categories")}
			>
				<option
					disabled
					value={""}
				>
					Pick one
				</option>
				{objectToArray(data).map((el) => {
					return (
						<option
							key={el.value}
							value={el.value}
						>
							{el.text}
						</option>
					);
				})}
			</select>
		);
	};
	return (
		<form
			action="submit"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="form-control w-full max-w-xs">
				<label
					className="label"
					htmlFor="categories"
				>
					<span className="label-text">Pick the categories</span>
				</label>
				{funcSelect()}
				{errors.categories && (
					<p className="text-red-600 font-semibold capitalize">
						{errors.categories.message}
					</p>
				)}
			</div>

			<div className="form-control w-full max-w-xs">
				<label
					className="label"
					htmlFor="slider"
				>
					<span className="label-text">How many questions</span>
					<span className="label-text-alt">{limitNumber}</span>
				</label>
				<input
					name="slider"
					id="slider"
					type="range"
					min="1"
					max="15"
					{...register("slider")}
					value={limitNumber}
					onChange={(e) => {
						setLimitNumber(e.target.value);
					}}
					className="range range-primary"
				/>
			</div>
			<div className="form-control w-full max-w-xs">
				<label
					className="label"
					htmlFor="difficulty"
				>
					<span className="label-text">Choose Difficulty</span>
				</label>
				<select
					className="select select-bordered"
					defaultValue={""}
					id="difficulty"
					name="difficulty"
					{...register("difficulty")}
				>
					<option
						disabled
						value={""}
					>
						Pick one
					</option>
					<option value={"easy"}>Easy</option>
					<option value={"medium"}>Medium</option>
					<option value={"hard"}>Hard</option>
				</select>
				{errors.difficulty && (
					<p className="text-red-600 font-semibold capitalize">
						{errors.difficulty.message}
					</p>
				)}
			</div>

			<div className="form-control w-full max-w-xs">
				<label
					className="label"
					htmlFor="minute"
				>
					<span className="label-text">Time (Minutes)</span>
					<span className="label-text-alt">{limitTime}</span>
				</label>
				<input
					name="minute"
					id="minute"
					type="range"
					min="1"
					max="60"
					{...register("minute")}
					value={limitTime}
					onChange={(e) => {
						setLimitTime(e.target.value);
					}}
					className="range range-primary"
				/>
			</div>
			<BtnContainerQuizMetaForm />
			<input
				type="checkbox"
				id="my-modal"
				className="modal-toggle"
				ref={startBtnRef}
			/>
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Do you want to continue?</h3>
					<div className="modal-action">
						<label
							htmlFor="my-modal"
							className="btn-primary btn"
						>
							NOPE YET
						</label>
						<Link
							className="btn-success btn"
							to={"/quiz"}
						>
							YES
						</Link>
					</div>
				</div>
			</div>
		</form>
	);
}
