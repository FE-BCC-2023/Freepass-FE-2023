import countryData from "../../countryData";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
const schema = yup
	.object({
		name: yup.string().required("Fill your name !!"),
		umur: yup
			.number()
			.typeError("Must be a number")
			.required("Fill your age")
			.integer()
			.positive(),
		email: yup.string().email("Fill a valid email").required("Fill your email"),
		education: yup.string().required("Please choose one of the option"),
		country: yup.string().required("Please choose your country"),
	})
	.required();
export const BtnContainerBio = () => {
	return (
		<div className="card-actions justify-end mt-5">
			<button
				type="submit"
				className="btn btn-success"
			>
				Next
			</button>
		</div>
	);
};

export default function BioForm(props) {
	const { dataFormBio, setDataFormBio } = props.formProps;
	const { isBioForm, setIsBioForm } = useContext(AppContext);
	const { valueText, setValueText } = useState("");
	const loopCountry = (data) => {
		let dataArr = [];
		for (const i in data) {
			dataArr.push({ id: i, name: data[i] });
		}
		return dataArr;
	};
	// Form validation Hook
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data) => {
		setDataFormBio(data);
		setIsBioForm(false);
	};
	const sessionStorageData = () => {
		return JSON.parse(window.sessionStorage.getItem("BIO_FORM_DATA"));
	};
	const sessionStorageIsEmpty = () => {
		return sessionStorageData() === null;
	};

	return (
		<form
			action="submit"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="form-control w-full max-w-xs">
				<label
					className="label"
					htmlFor="name"
				>
					<span className="label-text">What is your name?</span>
				</label>
				<input
					name="name"
					id="name"
					value={
						sessionStorageIsEmpty() ? valueText : sessionStorageData().name
					}
					type="text"
					placeholder="Type here"
					onChange={(e) => {
						setValueText(e.target.value);
					}}
					{...register("name")}
					className="input input-bordered w-full max-w-xs"
				/>
				{errors.name && (
					<p className="text-red-600 font-semibold capitalize">
						{errors.name.message}
					</p>
				)}
			</div>
			<div className="form-control w-full max-w-xs">
				<label
					className="label"
					htmlFor="email"
				>
					<span className="label-text">Enter your email address</span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					name="email"
					id="email"
					value={
						sessionStorageIsEmpty() ? valueText : sessionStorageData().email
					}
					onChange={(e) => {
						setValueText(e.target.value);
					}}
					{...register("email")}
					className="input input-bordered w-full max-w-xs"
				/>
				{errors.email && (
					<p className="text-red-600 font-semibold capitalize">
						{errors.email.message}
					</p>
				)}
			</div>
			<div className="form-control w-full max-w-xs">
				<label
					className="label"
					htmlFor="umur"
				>
					<span className="label-text">How old are you?</span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					id="umur"
					name="umur"
					value={sessionStorageIsEmpty() ? valueText : sessionStorageData().age}
					onChange={(e) => {
						setValueText(e.target.value);
					}}
					{...register("umur")}
					className="input input-bordered w-full max-w-xs"
				/>
				{errors.umur && (
					<p className="text-red-600 font-semibold capitalize">
						{errors.umur.message}
					</p>
				)}
			</div>
			<div className="form-control w-full max-w-xs">
				<label
					className="label"
					htmlFor="education"
				>
					<span className="label-text">Educational Level</span>
				</label>
				<select
					className="select select-bordered"
					name="education"
					id="education"
					{...register("education")}
					defaultValue={
						sessionStorageIsEmpty() ? "" : sessionStorageData().education
					}
				>
					<option
						disabled
						value={""}
					>
						Pick one
					</option>
					<option value={"sophomore"}>Sophomore</option>
					<option value={"junior"}>Junior</option>
					<option value={"senior"}>Senior</option>
				</select>
				{errors.education && (
					<p className="text-red-600 font-semibold capitalize">
						{errors.education.message}
					</p>
				)}
			</div>
			<div className="form-control w-full max-w-xs">
				<label
					className="label"
					htmlFor="country"
				>
					<span className="label-text">Country</span>
				</label>
				<select
					className="select select-bordered"
					id="country"
					name="country"
					defaultValue={
						sessionStorageIsEmpty() ? "" : sessionStorageData().country
					}
					{...register("country")}
				>
					<option
						disabled
						value={""}
					>
						Pick one
					</option>
					{loopCountry(countryData).map((datas) => {
						return (
							<option
								key={datas.id}
								value={datas.id}
							>
								{datas.name}
							</option>
						);
					})}
				</select>
				{errors.country && (
					<p className="text-red-600 font-semibold capitalize">
						{errors.country.message}
					</p>
				)}
			</div>
			<BtnContainerBio />
		</form>
	);
}
