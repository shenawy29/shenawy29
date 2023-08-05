import React from "react";
import Response from "./Response";
import commands from "@/app/utils/commands.json";
import { promptType } from "@/app/types/promptType";

export default function AboutResponse({ response }: promptType) {
  return (
    response === "help" && (
      <Response>
        <p>List of available commands:</p>
        <div>{commands.map((command) => command + " - ")}</div>
      </Response>
    )
  );
}
