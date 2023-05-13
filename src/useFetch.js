import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState({ status: false, msg: null });
	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err.message);
				setError({ status: true, msg: err });
				setLoading(false);
			});
	}, [url]);
	return { data, loading, error };
}
