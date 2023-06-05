import { Stack, Text } from "@mantine/core";
import { useDisplayStyles } from "./Display.styles";
import { useDataStore } from "../../pages/home/lib/store";

export const Display = () => {
  const { classes } = useDisplayStyles();
  const { mainDisplay, secondDisplay } = useDataStore();
  return (
    <Stack className={classes.stack}>
      <Text className={classes.secondDisplay}>{secondDisplay}</Text>
      <Text className={classes.firstDisplay}>{mainDisplay}</Text>
    </Stack>
  );
};
