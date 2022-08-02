import {
  Center,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { getPagesWithTag, getSite } from "../../api";
import Layout from "../../components/Layout";

interface CategoryPageProps {}

const CategoryPage: FunctionComponent<CategoryPageProps> = ({
  products,
  site,
}: any) => {
  const router = useRouter();

  const { tag } = router.query;

  return (
    <Layout site={site}>
      <VStack>
        <Center height="50vh">
          <VStack maxW="container.sm">
            <Heading fontWeight={600}>{tag}</Heading>
            {/* <Text align="center">
              Software and web development are vital for all tech businesses.
              So, we gathered free and premium development tools from around the
              web. Find your new online development tool now.
            </Text> */}
          </VStack>
        </Center>
      </VStack>

      <Center>
        <VStack spacing={10}>
          <Text as="h2" fontWeight={600} fontSize="xl">
            {products.length} results found
          </Text>
          <SimpleGrid
            spacingX={10}
            spacingY={10}
            minChildWidth="200px"
            maxW={["sm", "2xl"]}
            mt={4}
          >
            {products.map((page: any, i: number) => {
              return (
                <LinkBox
                  key={`item_${i}`}
                  as="article"
                  maxW="sm"
                  p={4}
                  borderWidth="1px"
                  rounded="md"
                >
                  <LinkOverlay href={`/${page.name}`}>
                    <Text fontWeight={600}>{page.data.product}</Text>
                    <Text>{page.data.description}</Text>
                  </LinkOverlay>
                </LinkBox>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Center>
    </Layout>
  );
};

export async function getServerSideProps({ params }: any) {
  const tag: string = params.tag;
  return {
    props: { site: getSite(), products: getPagesWithTag(tag) },
  };
}

export default CategoryPage;
