import React from "react";
import QuizMetaForm from "./QuizMetaForm";
import BioForm from "./BioForm";

import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useEffect } from "react";

export default function Form() {
	const { isBioForm } = useContext(AppContext);
	const [dataFormBio, setDataFormBio] = useState({});
	const [dataFormQuizMeta, setDataFormQuizMeta] = useState({});

	useEffect(() => {
		if (Object.keys(dataFormBio).length != 0) {
			window.sessionStorage.setItem(
				"BIO_FORM_DATA",
				JSON.stringify(dataFormBio)
			);
		}
		if (Object.keys(dataFormQuizMeta).length != 0) {
			window.sessionStorage.setItem(
				"QUIZ_META_FORM_DATA",
				JSON.stringify(dataFormQuizMeta)
			);
		}
	}, [dataFormBio, dataFormQuizMeta]);
	return (
		<div
			id="form"
			className="h-screen w-screen flex"
		>
			<div className="card w-96 shadow-xl m-auto bg-blue-50">
				<img
					src="/assets/form/logo.svg"
					alt=""
					className="h-20 w-20 block mx-auto -mt-8"
				/>
				<div className="card-body">
					{isBioForm ? (
						<BioForm formProps={{ dataFormBio, setDataFormBio }} />
					) : (
						<QuizMetaForm
							formProps={{ dataFormQuizMeta, setDataFormQuizMeta }}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
