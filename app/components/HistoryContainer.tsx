"use client";
import usePromptStore from "../hooks/usePromptStore";
import DefaultResponse from "./DefaultResponse";
import HelpResponse from "./responses/HelpResponse";
import commands from "@/app/utils/commands.json";
import NoCommandExists from "./responses/NoCommandExists";
import InitResponse from "./responses/InitResponse";
import AboutResponse from "./responses/AboutResponse";
import ClearResponse from "./responses/ClearResponse";
import MailResponse from "./responses/MailResponse";
import GitHubResponse from "./responses/GitHubResponse";
import LinkedInResponse from "./responses/LinkedInResponse";

type Props = {};

export default function HistoryContainer({}: Props) {
	const { promptHistory } = usePromptStore();

	return (
		<>
			{promptHistory.map((prompt, index) => (
				<div
					key={prompt.response + index}
					className="flex flex-col py-2 text-red-600 "
				>
					<div className="flex flex-row gap-2 px-2">
						<div className="flex flex-row whitespace-nowrap">
							<DefaultResponse />
						</div>
						<div className="flex flex-col">
							<div className="text-xl">{prompt.response}</div>
						</div>
					</div>
					<HelpResponse response={prompt.response} />
					<InitResponse response={prompt.response} />
					<AboutResponse response={prompt.response} />
					<ClearResponse response={prompt.response} />
					<MailResponse response={prompt.response} />
					<GitHubResponse response={prompt.response} />
					<LinkedInResponse response={prompt.response} />
					{!commands.includes(prompt.response) && <NoCommandExists />}
				</div>
			))}
		</>
	);
}
