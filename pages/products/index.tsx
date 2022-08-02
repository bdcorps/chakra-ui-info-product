import { Box, Container, Input, Select, Stack } from "@chakra-ui/react";
import React, { FunctionComponent, useState } from "react";
import { getSite } from "../../api";
import HundredLayout from "../../components/Layout";

interface ToolsIndexProps {}

const ToolsIndex: FunctionComponent<ToolsIndexProps> = ({ site }: any) => {
  let targetSite = site;

  const {
    name,
    title,
    description,
    image,
    pages,
    color: siteColor,
    logo,
    allTags,
  } = targetSite;

  const [tag, setTag] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const selectedPages = pages.filter(
    (page: any) =>
      (tag === "all" || page?.data?.tags.includes(tag)) &&
      (search === "" ||
        page?.data?.name.toLowerCase().includes(search.toLowerCase()))
  );

  let res: any = [];

  return (
    <>
      <HundredLayout site={site}>
        <Box>
          <Container maxW="container.xl">
            <Box pt={20}>
              <Stack spacing={2} mx={2} mb={4} direction={["column", "row"]}>
                <Input
                  w={["100%", "75%"]}
                  placeholder="Search for products..."
                  backgroundColor="white"
                  mr={4}
                  onChange={(evt) => {
                    setSearch(evt.target.value);
                  }}
                />
                <Select
                  placeholder="Select a tag"
                  defaultValue="all"
                  onChange={(evt: any) => {
                    setTag(evt.target.value);
                  }}
                  flex={1}
                >
                  <option value="all">Show all</option>
                  {allTags.map((tag: any, i: number) => {
                    return (
                      <option key={`tag_${i}`} value={tag}>
                        {tag}
                      </option>
                    );
                  })}
                </Select>
              </Stack>
            </Box>
          </Container>
        </Box>
      </HundredLayout>
    </>
  );
};

export async function getServerSideProps({ params }: any) {
  return {
    props: { site: getSite() },
  };
}

export default ToolsIndex;
