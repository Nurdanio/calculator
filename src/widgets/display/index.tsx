import { Stack, Text } from "@mantine/core";
import { useDisplayStyles } from "./Display.styles";

export const Display = () => {
  const { classes } = useDisplayStyles();
  return (
    <Stack className={classes.stack}>
      <Text className={classes.secondDisplay}>1231231</Text>
      <Text className={classes.firstDisplay}>213123</Text>
    </Stack>
  );
};
