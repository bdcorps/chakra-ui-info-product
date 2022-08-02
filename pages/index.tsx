import {
  Box,
  Center,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React, { FunctionComponent } from "react";
import { getSite } from "../api";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import ViewAllCard from "../components/ViewAllCard";
import { getMetaImage } from "../utils";

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
      <NextSeo
        title={`${name} | Discover new tools for your Indie projects`}
        description="Discover new tools for your Indie projects"
        openGraph={{
          url: "https://puffin.launchman.io",
          title: name,
          description: "Discover new tools for your Indie projects",
          images: [
            {
              url: getMetaImage(`https://puffin.launchman.io`),
              width: 800,
              height: 600,
              alt: name,
              type: "image/jpeg",
            },
          ],
          site_name: name,
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: logo,
          },
        ]}
      />

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
                    Puffin Tools is a curated directory of tools for startups.
                    Find tools for growing your startup, reaching new customers,
                    and improving your brand
                  </Text>
                </VStack>

                <Box w="full">
                  <Wrap spacing={3} justify="center" w="full">
                    {allTags.slice(0, 20).map((tag: string, i: any) => {
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
                <VStack spacing={10}>
                  <Stack
                    spacing={10}
                    align="flex-start"
                    w="full"
                    direction={["column", "row"]}
                  >
                    {/* <Box w={300}>
            <CategoryBrowser tags={uniqueCategories} />
          </Box> */}
                    <SimpleGrid
                      minChildWidth={[200, 300]}
                      spacing={10}
                      flex="2"
                    >
                      {pages.slice(0, 5).map((page: any, i: number) => {
                        return (
                          <ProductCard product={page.data} key={`key_${i}`} />
                        );
                      })}
                      <ViewAllCard />
                    </SimpleGrid>
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
