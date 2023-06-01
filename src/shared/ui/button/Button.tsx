import { Center } from "@mantine/core";
import { useButtonStyles } from "./Button.styles";
import { ReactNode } from "react";

interface ButtonProps {
  label?: string | ReactNode;
  color?: string;
}

export const Button = ({ label = "0", color = "#2E2F38" }: ButtonProps) => {
  const { classes } = useButtonStyles();
  return (
    <Center className={classes.center} sx={{ backgroundColor: color }}>
      {label}
    </Center>
  );
};
