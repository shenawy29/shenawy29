"use client";

import { promptType } from "@/app/types/promptType";
import { useEffect } from "react";
import Response from "./Response";

export default function LinkedInResponse({ response }: promptType) {
  useEffect(() => {
    if (response === "linkedin") {
      const win: Window = window;
      win.open(
        "https://www.linkedin.com/in/mohamed-el-shenawy-21a341254/",
        "_blank"
      );
    }
  }, [response]);

  return (
    response === "linkedin" && (
      <Response>
        <p>Opening my LinkedIn profile..</p>
      </Response>
    )
  );
}
