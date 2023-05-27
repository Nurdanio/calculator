import { MantineProvider } from "@mantine/core";

export const withMantineProvider = (component: () => JSX.Element) => () =>
  <MantineProvider>{component()}</MantineProvider>;
