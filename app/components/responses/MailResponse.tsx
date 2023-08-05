"use client";

import { promptType } from "@/app/types/promptType";
import { useEffect } from "react";
import Response from "./Response";

export default function MailResponse({ response }: promptType) {
  useEffect(() => {
    if (response === "mail") {
      const win: Window = window;
      win.location = "mailto:alshenawy10203022@gmail.com";
    }
  }, [response]);
  return (
    response === "mail" && (
      <Response>
        <p>Opening Mail..</p>
      </Response>
    )
  );
}
