"use client";

import HistoryContainer from "../components/HistoryContainer";
import Input from "../components/Input";

export default function Home() {
	return (
		<main className="min-h-screen p-2 overflow-auto min-w-max">
			<HistoryContainer />
			<Input />
		</main>
	);
}
