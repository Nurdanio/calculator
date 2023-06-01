import { MantineProvider } from "@mantine/core";

export const withMantineProvider = (component: () => JSX.Element) => () =>
  (
    <MantineProvider
      withNormalizeCSS
      theme={{
        fontFamily: "Work Sans, sans-serif",
      }}
    >
      {component()}
    </MantineProvider>
  );
