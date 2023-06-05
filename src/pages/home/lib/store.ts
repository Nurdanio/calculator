import { create } from "zustand";

interface DataStoreState {
  mainDisplay: string | null;
  setMainDisplay: (mainDisplay: string | null) => void;
  secondDisplay: string | null;
  setSecondDisplay: (secondDisplay: string | null) => void;
  firstNumber: number | null;
  setFirstNumber: (firstNumber: number | null) => void;
  secondNumber: number | null;
  setSecondNumber: (secondNumber: number | null) => void;
  operator: string | null;
  setOperator: (operator: string | null) => void;
}

export const useDataStore = create<DataStoreState>((set) => ({
  mainDisplay: null,
  setMainDisplay: (value) =>
    set(() => ({
      mainDisplay: value,
    })),
  secondDisplay: null,
  setSecondDisplay: (value) =>
    set(() => ({
      secondDisplay: value,
    })),
  firstNumber: null,
  setFirstNumber: (value) =>
    set(() => ({
      firstNumber: value,
    })),
  secondNumber: null,
  setSecondNumber: (value) =>
    set(() => ({
      secondNumber: value,
    })),
  operator: null,
  setOperator: (value) =>
    set(() => ({
      operator: value,
    })),
}));
