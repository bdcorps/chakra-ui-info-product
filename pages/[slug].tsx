import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { getPage, getRelatedProducts, getSite } from "../api";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { getMetaImage } from "../utils";

const HundredItem: NextPage = ({
  site,
  products: {
    name: productName,
    product,
    description,
    maker,
    link,
    progress,
    tags,
    revenueRank,
    revenue,
    isRecurring,
  },
  relatedProducts,
}: any) => {
  const { name, title, logo, color, allTags } = site;

  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Layout site={site}>
        <Container maxW="container.xl">
          <Box padding="4" color="black" w="full">
            <Center p={4} minHeight="65vh">
              <Stack spacing={10} align="center" direction={["column", "row"]}>
                <Box borderWidth="1px" rounded="md">
                  <Image
                    blurDataURL="https://picsum.photos/992/558"
                    placeholder="blur"
                    src={getMetaImage(link)}
                    alt="Product Image"
                    width={992}
                    height={558}
                  ></Image>
                </Box>

                <VStack spacing={6} my={12} align="flex-start">
                  {/* <Tag colorScheme="purple">#{revenueRank} on Leaderboard</Tag> */}
                  <HStack>
                    {tags.map((tag: any, i: number) => {
                      return (
                        <Badge colorScheme="green" key={`tag_${i}`}>
                          <Link href={`/tags/${tag}`}>{tag}</Link>
                        </Badge>
                      );
                    })}
                  </HStack>
                  <Container maxW="container.sm" p={0}>
                    <Heading size="2xl" mb={4}>
                      {product}
                    </Heading>
                    <VStack spacing={4} align="flex-start" color="gray.600">
                      <Text fontSize="xl">{description}</Text>
                      <Text fontSize="xl">Built by {maker}</Text>
                    </VStack>

                    <Box mt={4}>
                      <Link href={link} color="brand.500">
                        Get it →
                      </Link>
                    </Box>
                  </Container>
                </VStack>
              </Stack>
            </Center>
          </Box>
        </Container>

        <Container maxW="container.xl" py={16}>
          <VStack spacing={10} w="full">
            <Text as="h2" fontWeight={600} fontSize="2xl" textAlign="center">
              Related Products
            </Text>

            <Box w="full">
              <SimpleGrid minChildWidth={[200, 300]} spacing={10} flex="2">
                {relatedProducts.slice(0, 3).map((page: any, i: number) => {
                  return <ProductCard product={page.data} key={`key_${i}`} />;
                })}
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>

        {/* <Container maxW="container.md" py={16}>
          <Text fontWeight={600} fontSize="3xl" align="center">
            FAQ
          </Text>
          <FAQ items={faq} />
        </Container> */}

        <Container maxW="container.lg" py={16}>
          <VStack spacing={6} backgroundColor="brand.400" rounded="xl" p={6}>
            <VStack spacing={4} maxW="md">
              <Text
                fontWeight={600}
                fontSize="3xl"
                align="center"
                color="white"
              >
                Get 100 new paying customers in 100 days
              </Text>
            </VStack>

            <Button
              size="lg"
              color="brand.500"
              backgroundColor="white"
              onClick={() => router.push("https://tally.so/r/3Xxq7O")}
            >
              Join the challenge!
            </Button>
          </VStack>
        </Container>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params }: any) {
  return {
    props: {
      site: getSite(),
      products: getPage(),
      relatedProducts: getRelatedProducts(),
    },
  };
}

export default HundredItem;
