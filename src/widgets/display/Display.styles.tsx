import { createStyles } from "@mantine/core";

export const useDisplayStyles = createStyles(() => ({
  stack: {
    width: "100%",
    gap: 16,
    color: "#FFFFFF",
    fontWeight: 300,
    alignItems: "end",
  },
  firstDisplay: {
    fontSize: 96,
    lineHeight: "96px",
  },
  secondDisplay: {
    opacity: 0.4,
    fontSize: 40,
    lineHeight: "46px",
  },
}));
