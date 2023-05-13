import { useState } from "react";
import Form from "./components/Form/Form";
import { createContext } from "react";
import Quiz from "./components/QuizPage/Quiz";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Result from "./components/QuizPage/Result";

export const AppContext = createContext();

function App() {
	// global hooks
	const [isBioForm, setIsBioForm] = useState(true);
	return (
		<AppContext.Provider value={{ isBioForm, setIsBioForm }}>
			<div id="App" className="overflow-x-hidden">
				<Routes>
					<Route
						path="/"
						element={<MainPage setBioForm={setIsBioForm} />}
					/>
					<Route
						path="/form"
						element={<Form />}
					/>
					<Route
						path="/quiz"
						element={<Quiz />}
					/>
					<Route
						path="/result"
						element={<Result />}
					/>
				</Routes>
			</div>
		</AppContext.Provider>
	);
}

export default App;
