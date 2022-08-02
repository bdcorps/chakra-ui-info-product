import {
  Box,
  Center,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { getSite } from "../../api";
import Layout from "../../components/Layout";

interface TagsProps {
  site: any;
}

const Tags: FunctionComponent<TagsProps> = ({ site }: TagsProps) => {
  const { allTags } = site;
  return (
    <Layout site={site}>
      <Center p={4} minHeight="65vh">
        <VStack>
          <Container textAlign="center" flex="1" maxW="container.lg">
            <Heading size="2xl" mb={4}>
              All Tags
            </Heading>
            <Text fontSize="xl">Discover tools by tag name</Text>
          </Container>
        </VStack>
      </Center>
      <Container maxW="container.lg">
        <SimpleGrid minChildWidth={[200, 300]} spacing={10} flex="2">
          {allTags.map((tag: any, i: number) => {
            return (
              <Box
                w="full"
                h="full"
                p="5"
                borderWidth="1px"
                rounded="md"
                boxShadow="xs"
                key={`tag_${i}`}
              >
                <Link href={`/tags/${tag}`}>{tag}</Link>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps({ params }: any) {
  return {
    props: { site: getSite() },
  };
}

export default Tags;
