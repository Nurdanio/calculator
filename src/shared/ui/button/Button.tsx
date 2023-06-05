import { Center, Button as MantineButton } from "@mantine/core";
import { useButtonStyles } from "./Button.styles";
import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  label?: string | ReactNode;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  label = "0",
  color = "#2E2F38",
  onClick = () => {},
}: ButtonProps) => {
  const { classes } = useButtonStyles();
  return (
    <MantineButton
      className={classes.center}
      sx={{ backgroundColor: color }}
      onClick={onClick}
    >
      <Center>{label}</Center>
    </MantineButton>
  );
};
