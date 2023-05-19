import { MouseEventHandler, ReactNode } from "react";
import { Button as MantineButton } from "@mantine/core";

interface ButtonProps {
  label?: string | ReactNode;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  onClick = () => {},
  label = "0",
  color = "gray.8",
}: ButtonProps) => (
  <MantineButton
    color={color}
    sx={(theme) => ({
      width: 72,
      height: 72,
      borderRadius: 24,
      fontWeight: 400,
      fontSize: 32,
    })}
    onClick={onClick}
  >
    {label}
  </MantineButton>
);
