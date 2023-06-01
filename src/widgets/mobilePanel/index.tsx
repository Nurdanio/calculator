import { Flex, Text } from "@mantine/core";
import { useMobilePanelStyles } from "./MobilePanel.styles";
import { AiFillSignal as SingalIcon } from "react-icons/ai";
import { GetTime } from "../../shared/lib/getTime";
import { GetBattery } from "../../shared/lib/getBattery";

export const MobilePanel = () => {
  const { classes } = useMobilePanelStyles();

  return (
    <Flex className={classes.flex}>
      <Text>{GetTime()}</Text>
      <Flex gap={10} align="center">
        <SingalIcon />
        <Text>{GetBattery()}</Text>
      </Flex>
    </Flex>
  );
};
