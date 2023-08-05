import React from "react";
import Response from "./Response";
import { promptType } from "@/app/types/promptType";

export default function AboutResponse({ response }: promptType) {
	return (
		response === "help" && (
			<Response>
				<p>List of available commands:</p>
				<div>help - github - about - linkedin - init - clear - mail</div>
			</Response>
		)
	);
}
