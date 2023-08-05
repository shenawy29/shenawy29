"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import usePromptStore from "../hooks/usePromptStore";
import DefaultResponse from "./DefaultResponse";
import commands from "@/app/utils/commands.json";
import clsx from "clsx";

type Props = {};

export default function Input({}: Props) {
	const [value, setValue] = useState("");
	const ref = useRef<any>();
	const { add } = usePromptStore();

	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			setValue("");
			add(value);
		},
		[add, value]
	);

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});
	useEffect(() => {
		addEventListener("click", () => {
			ref.current.focus();
		});
	}, []);

	const handleChange = useCallback(
		(e: React.ChangeEvent<any>) => {
			setValue(e.target.value);
		},
		[setValue]
	);

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-row items-center min-w-full px-2 py-2 flex-nowrap"
		>
			<label htmlFor="input" className="flex flex-row whitespace-nowrap ">
				<DefaultResponse />
			</label>

			<input
				ref={ref}
				id="input"
				autoFocus
				autoComplete="off"
				className={clsx(
					"w-full h-full px-2 text-xl bg-transparent outline-none pointer-events-none",
					commands.includes(value) || value === ""
						? "text-red-600"
						: "text-red-600/50"
				)}
				value={value}
				autoCorrect="off"
				onChange={handleChange}
			/>
		</form>
	);
}
