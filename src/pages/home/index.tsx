import { Center, Stack } from "@mantine/core";
import { useHomePageStyles } from "./HomePage.styles";
import { CalculatorKeyboard, Display, MobilePanel } from "../../widgets";

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
