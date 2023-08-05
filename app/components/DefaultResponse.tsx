import React from "react";

type Props = {};

function DefaultResponse({}: Props) {
	return (
		<div className="flex flex-row text-xl whitespace-nowrap ">
			<span className="text-red-500">guest</span>
			<span className="text-red-900">@</span>
			<span className="text-red-600">shenawy29.vercel.app</span>
			<span className="text-red-900">:$ ~</span>
		</div>
	);
}

export default React.memo(DefaultResponse);