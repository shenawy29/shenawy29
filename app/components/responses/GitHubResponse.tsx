"use client";
import { promptType } from "@/app/types/promptType";
import { useEffect } from "react";
import Response from "./Response";

export default function GitHubResponse({ response }: promptType) {
  useEffect(() => {
    if (response === "github") {
      const win: Window = window;
      win.open("https://github.com/shenawy29", "_blank");
    }
  }, [response]);

  return (
    response === "github" && (
      <Response>
        <p>Opening my GitHub profile..</p>
      </Response>
    )
  );
}
