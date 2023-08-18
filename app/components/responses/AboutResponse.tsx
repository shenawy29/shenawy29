import Response from "./Response";

type Props = {};
import { promptType } from "@/app/types/promptType";

export default function AboutResponse({ response }: promptType) {
	return (
		response === "about" && (
			<Response>
				<p>I am an Egyptian software developer based in Port Said, Egypt, and this project serves as my developer portfolio.</p>
				<p>Alongside my studies in Computer Science, I have a strong passion for exploring new languages and frameworks, constantly seeking opportunities to expand my knowledge in the field.</p>
			</Response>
		)
	);
}
