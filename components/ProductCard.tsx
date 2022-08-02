import {
  Badge,
  Box,
  HStack,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

interface ProductCardProps {
  product: any;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
  product,
}: ProductCardProps) => {
  const {
    name: slug,
    product: productName,
    description,
    maker,
    link,
    progress,
    tags,
    revenueRank,
    revenue,
    isRecurring,
  } = product;

  return (
    <LinkBox
      as="article"
      w="full"
      h="full"
      p="5"
      borderWidth="1px"
      rounded="md"
      boxShadow="xs"
      backgroundColor="white"
      _hover={{ boxShadow: "xl" }}
    >
      <VStack spacing={6} align="flex-start">
        <Wrap>
          {tags &&
            tags.slice(0, 2).map((tag: any, i: number) => {
              return (
                <WrapItem key={`${i}`}>
                  <Badge colorScheme="green">
                    <Link href={`/tags/${tag}`}>{tag}</Link>
                  </Badge>
                </WrapItem>
              );
            })}
          {tags.length > 2 && (
            <Text fontSize="xs" fontWeight="medium">
              +{tags.length - 2}
            </Text>
          )}
        </Wrap>

        <Box>
          <HStack spacing={2}>
            <Text fontWeight={500}>{productName}</Text>
          </HStack>

          <Text>{description}</Text>
        </Box>

        <LinkOverlay href={`/${slug}`}>
          <Text color="brand.500">View →</Text>
        </LinkOverlay>
      </VStack>
    </LinkBox>
  );
};

export default ProductCard;
