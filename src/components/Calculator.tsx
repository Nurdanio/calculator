import React, { useState } from "react";
import { useMantineTheme } from "@mantine/core";
import { Button } from "./shared/ui/button";
import { Display } from "./Display";

import { IoBackspaceOutline as BackspaceIcon } from "react-icons/io5";
import {
  TbMinus as MinusIcon,
  TbEqual as EqualIcon,
  TbPlus as PlusIcon,
  TbDivide as DelenieIcon,
  TbPlusMinus as PlusMinusIcon,
  TbX as MultiplicationIcon,
  TbMoonStars as MoonStarsIcon,
  TbSun as SunIcon,
} from "react-icons/tb";

import { Grid, Stack, Switch, Center } from "@mantine/core";

export const Calculator = () => {
  const theme = useMantineTheme();

  const [displayValue, setDisplayValue] = useState<string>("0");
  const [storedValue, setStoredValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleDigitClick = (event: string) => {
    setDisplayValue((prevState) =>
      prevState === "0" ? event : `${prevState}${event}`
    );
  };

  const handleOperatorClick = (operator: string): void => {
    setOperator(operator);
    setStoredValue(displayValue + operator);
    setDisplayValue("");
  };

  const handleEqualClick = () => {
    setStoredValue((prevState) => prevState + displayValue);

    if (storedValue !== null && operator !== null) {
      switch (operator) {
        case "+":
          setDisplayValue(
            (
              Number(storedValue.split(operator)[0]) + Number(displayValue)
            ).toString()
          );
          break;
        case "-":
          setDisplayValue(
            (
              Number(storedValue.split(operator)[0]) - Number(displayValue)
            ).toString()
          );
          break;
        case "/":
          setDisplayValue(
            (
              Number(storedValue.split(operator)[0]) / Number(displayValue)
            ).toString()
          );
          break;
        case "*":
          setDisplayValue(
            (
              Number(storedValue.split(operator)[0]) * Number(displayValue)
            ).toString()
          );
          break;
      }
    }
  };

  const handleDelete = () => {
    setDisplayValue("0");
    setStoredValue(null);
  };

  const handleRemove = () => {
    setDisplayValue(
      displayValue.length === 1
        ? "0"
        : displayValue.slice(0, displayValue.length - 1)
    );
  };

  return (
    <>
      <Stack
        sx={{
          width: 375,
          height: 800,
          backgroundColor: "#17171C",
          borderRadius: 20,
          justifyContent: "space-around",
        }}
      >
        <Center>
          <Switch
            size="lg"
            color={theme.colorScheme === "light" ? "dark" : "gray"}
            onLabel={<MoonStarsIcon size="1rem" color={theme.colors.blue[6]} />}
            offLabel={<SunIcon size="1rem" color={theme.colors.yellow[5]} />}
          />
        </Center>
        <Display count={displayValue} prevCount={storedValue} />
        <Grid
          sx={{
            width: 335,
            margin: "0 auto",
          }}
        >
          <Grid.Col span={3}>
            <Button label="C" color="gray.6" onClick={handleDelete} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label={<PlusMinusIcon />} color="gray.6" />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label="%" color="gray.6" />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button
              label={<DelenieIcon />}
              color="indigo.6"
              onClick={() => handleOperatorClick("/")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label={1} onClick={() => handleDigitClick("1")} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label={2} onClick={() => handleDigitClick("2")} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label={3} onClick={() => handleDigitClick("3")} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button
              label={<PlusIcon />}
              color="indigo.6"
              onClick={() => handleOperatorClick("+")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label={4} onClick={() => handleDigitClick("4")} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label={5} onClick={() => handleDigitClick("5")} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label={6} onClick={() => handleDigitClick("6")} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button
              label={<MinusIcon />}
              color="indigo.6"
              onClick={() => handleOperatorClick("-")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label={7} onClick={() => handleDigitClick("7")} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label={8} onClick={() => handleDigitClick("8")} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label={9} onClick={() => handleDigitClick("9")} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button
              label={<MultiplicationIcon />}
              color="indigo.6"
              onClick={() => handleOperatorClick("*")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label="." onClick={() => handleDigitClick(".")} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label={0} onClick={() => handleDigitClick("0")} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button label={<BackspaceIcon />} onClick={handleRemove} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button
              label={<EqualIcon />}
              color="indigo.6"
              onClick={() => {
                handleEqualClick();
              }}
            />
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
};
