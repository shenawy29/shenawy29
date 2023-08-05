import React from "react";
import Response from "./Response";

type Props = {};

export default function NoCommandExists({}: Props) {
  return (
    <Response>
      <div>
        This command does not exist. Use &apos;help&apos; to find a list of available
        commands.
      </div>
    </Response>
  );
}
