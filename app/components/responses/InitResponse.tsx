import Response from "./Response";
import { promptType } from "@/app/types/promptType";

type Props = {};

export default function AboutResponse({ response }: promptType) {
	return (
		response === "init" && (
			<>
				<Response>
					<pre className="">{`
.|'''| '||  ||''||''''|'||\   ||'     /.\  '||      ||''\\  //' 
||      ||  ||  ||   .  ||\\  ||     // \\  ||      ||   \\//   
'|'''|, ||''||  ||'''|  || \\ ||    //...\\ ||  /\  ||    ||    
 .   || ||  ||  ||      ||  \\||   //     \\ \\//\\//     ||    
 |...|'.||  ||..||....|.||   \||..//       \\.\/  \/     .||.   
        `}</pre>
					<p>Type &apos;help&apos; to see a list of commands</p>
				</Response>
			</>
		)
	);
}
