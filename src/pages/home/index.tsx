import { Center, Stack } from "@mantine/core";
import { useHomePageStyles } from "./HomePage.styles";
import { CalculatorKeyboard } from "../../widgets";
import { Display } from "../../widgets/display";
import { MobilePanel } from "../../widgets/mobilePanel";

export const HomePage = () => {
  const { classes } = useHomePageStyles();

  return (
    <Center className={classes.center}>
      <Stack className={classes.stack}>
        <MobilePanel />
        <Display />
        <CalculatorKeyboard />
      </Stack>
    </Center>
  );
};
