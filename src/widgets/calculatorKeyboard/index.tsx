import { Grid } from "@mantine/core";
import { Button } from "../../shared/ui/button";
import {
  RiDivideLine as DivideIcon,
  RiCloseFill as MultiplicationIcon,
  RiSubtractFill as MinusIcon,
  RiDeleteBack2Line as DeleteIcon,
} from "react-icons/ri";

import {
  TbPlus as PlusIcon,
  TbEqual as EqualIcon,
  TbPlusMinus as PlusMinusIcon,
} from "react-icons/tb";
import { ClickOperator } from "../../shared/lib";

export const CalculatorKeyboard = () => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <Button label="C" color="#4E505F" />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button color="#4E505F" label={<PlusMinusIcon />} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label="%" color="#4E505F" />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button color="#4B5EFC" label={<DivideIcon />} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label={1} onClick={() => ClickOperator()} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label={2} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label={3} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button color="#4B5EFC" label={<MultiplicationIcon />} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label={4} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label={5} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label={6} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button color="#4B5EFC" label={<MinusIcon />} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label={7} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label={8} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label={9} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button color="#4B5EFC" label={<PlusIcon />} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label="." />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label={0} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button label={<DeleteIcon />} />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button color="#4B5EFC" label={<EqualIcon />} />
      </Grid.Col>
    </Grid>
  );
};
