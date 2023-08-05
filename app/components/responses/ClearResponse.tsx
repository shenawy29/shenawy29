"use client";

import { promptType } from "@/app/types/promptType";
import { useEffect } from "react";
import usePromptStore from "@/app/hooks/usePromptStore";

export default function ClearResponse({ response }: promptType) {
  const { clear } = usePromptStore();

  useEffect(() => {
    if (response === "clear") {
      clear();
    }
  }, [response, clear]);

  return null;
}
