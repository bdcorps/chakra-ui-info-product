import {
  Box,
  Center,
  Container,
  Link,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { getSite } from "../api";
import Layout from "../components/Layout";

interface SiteIndexProps {}

const SiteIndex: FunctionComponent<SiteIndexProps> = ({ site }: any) => {
  const {
    name,
    title,
    description,
    image,
    pages,
    color: siteColor,
    logo,
    allTags,
  } = site;

  return (
    <>
      <Layout site={site}>
        <Box>
          <Container maxW="container.xl">
            <Center minHeight={["80vh", "60vh"]}>
              <VStack spacing={10} textAlign="center" maxW="2xl">
                <VStack spacing={2}>
                  <Text fontSize="4xl" fontWeight={600}>
                    {description}
                  </Text>

                  <Text color="gray.500">
                    169 Founders Have Joined the Challenge
                  </Text>
                </VStack>

                <Box w="full">
                  <Wrap spacing={3} justify="center" w="full">
                    {allTags.map((tag: any, i: any) => {
                      return (
                        <WrapItem key={`tag_${i}`}>
                          <Center
                            backgroundColor="gray.200"
                            py={1}
                            px={3}
                            rounded="full"
                            _hover={{
                              backgroundColor: "brand.500",
                              color: "white",
                            }}
                          >
                            <Link href={`/tags/${tag}`} fontSize="sm">
                              {tag}
                            </Link>
                          </Center>
                        </WrapItem>
                      );
                    })}
                  </Wrap>
                </Box>
              </VStack>
            </Center>

            <Box pt={20}>
              <Container maxW="container.xl" p={2}>
                <Text fontSize="2xl" fontWeight={600} textAlign="center" p={4}>
                  Leaderboard
                </Text>
                <VStack spacing={10}>
                  <Stack
                    spacing={10}
                    align="flex-start"
                    w="full"
                    direction={["column", "row"]}
                  >
                    {/* <SimpleGrid
                      minChildWidth={[200, 300]}
                      spacing={10}
                      flex="2"
                    >
                      {pages.map((page: any, i: number) => {
                        return (
                          <ProductCard product={page.data} key={`key_${i}`} />
                        );
                      })}
                      <ViewAllCard />
                    </SimpleGrid> */}
                  </Stack>
                </VStack>
              </Container>
            </Box>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params }: any) {
  return {
    props: { site: getSite() },
  };
}

export default SiteIndex;
