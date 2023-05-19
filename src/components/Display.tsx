import { Text, Stack } from "@mantine/core";

interface CountProps {
  count: string;
  prevCount: string | null;
}

export const Display = ({ count, prevCount }: CountProps) => {
  return (
    <>
      <Stack
        sx={{
          maxWidth: "335px",
          height: "150px",
          textAlign: "right",
          margin: "0 ",
          gap: 0,
        }}
      >
        <Text
          sx={{
            fontSize: 40,
            color: "#4E505F",
          }}
        >
          {prevCount}
        </Text>
        <Text
          sx={{
            fontWeight: 300,
            fontSize: 96,
            color: "#FFFFFF",
          }}
        >
          {count}
        </Text>
      </Stack>
    </>
  );
};
