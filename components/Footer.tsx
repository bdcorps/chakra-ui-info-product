import {
  Box,
  Container,
  Divider,
  HStack,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

interface FooterProps {
  name: string;
}

const CommonFooter: FunctionComponent<FooterProps> = ({
  name,
}: FooterProps) => {
  return (
    <Box>
      <Container maxW="container.lg" p={4}>
        <Divider />
        <HStack py={4} spacing={6} align="center">
          <HStack spacing={2}>
            <Text fontWeight={600} fontSize="md">
              © 2022 {name}
            </Text>
          </HStack>
          <LinkBox>
            {/* <LinkOverlay href={} isExternal>
              <Image src="twitter.svg"></Image>
            </LinkOverlay> */}
          </LinkBox>
        </HStack>
      </Container>
    </Box>
  );
};

export default CommonFooter;
