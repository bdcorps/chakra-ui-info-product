import { Center, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

interface ViewAllCardProps {}

const ViewAllCard: FunctionComponent<
  ViewAllCardProps
> = ({}: ViewAllCardProps) => {
  return (
    <LinkBox
      as="article"
      w="full"
      h="full"
      p="5"
      borderWidth="1px"
      rounded="md"
      backgroundColor="brand.500"
    >
      <LinkOverlay href="/tools">
        <Center w="full" h="full">
          <Text color="white" fontSize="lg" fontWeight="medium">
            View All →
          </Text>
        </Center>
      </LinkOverlay>
    </LinkBox>
  );
};

export default ViewAllCard;
