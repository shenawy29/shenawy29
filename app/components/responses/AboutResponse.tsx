import Response from "./Response";

type Props = {};
import { promptType } from "@/app/types/promptType";

export default function AboutResponse({ response }: promptType) {
	return (
		response === "about" && (
			<Response>
				<p>This is a personal project serving as a developer portfolio.</p>
				<p>I am an Egyptian software developer located in Port Said, Egypt.</p>
				<p>
					I also study Computer Science and I love learning about new languages
					and frameworks.
				</p>
			</Response>
		)
	);
}
