import { useDataStore } from "../../../pages/home/lib/store";

export const SetDisplay = () => {
  const { setMainDisplay, setSecondDisplay, operator } = useDataStore();
};
