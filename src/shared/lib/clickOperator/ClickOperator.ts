import { useDataStore } from "../../../pages/home/lib/store";

interface ClickOperatorProps {
  value: number;
  operator?: string;
}

export const ClickOperator = () => {
  const { setMainDisplay } = useDataStore();
  setMainDisplay("1");
};
