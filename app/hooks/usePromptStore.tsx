import { create } from "zustand";
import { promptType } from "../types/promptType";

type Store = {
  promptHistory: Array<promptType>;
  add: (input: string) => void;
  clear: () => void;
};

const usePromptStore = create<Store>()((set) => ({
  promptHistory: [
    {
      response: "init",
    },
  ],
  add: (input) =>
    set((state) => ({
      promptHistory: [...state.promptHistory, { response: input }],
    })),
  clear: () => set(() => ({ promptHistory: [] })),
}));

export default usePromptStore;
