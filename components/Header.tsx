import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

interface DesktopSidebarContentsProps {
  name: string;
  navLinks: string[];
}

const DesktopSidebarContents = ({
  name,
  navLinks,
}: DesktopSidebarContentsProps) => {
  const router = useRouter();
  return (
    <Container maxW={["full", "container.lg"]} p={0}>
      <Stack
        justify="space-between"
        p={[0, 4]}
        w="full"
        direction={["column", "row"]}
      >
        <Box display={{ base: "none", md: "flex" }}>
          <Heading
            fontSize="xl"
            onClick={() => {
              router.push("/");
            }}
            cursor="pointer"
          >
            {name}
          </Heading>
        </Box>
        <Spacer />
        <Stack align="flex-start" spacing={4} direction={["column", "row"]}>
          {navLinks.map((navLink: any, i: number) => {
            return (
              <Link
                href={navLink.link}
                key={`navlink_${i}`}
                fontWeight={500}
                variant="ghost"
              >
                {navLink.name}
              </Link>
            );
          })}
        </Stack>
        <Spacer />
        <LinkBox>
          <LinkOverlay href={`https://twitter.com/thisissukh_`} isExternal>
            <Image src="./twitter.svg"></Image>
          </LinkOverlay>
        </LinkBox>
      </Stack>
    </Container>
  );
};
const MobileSidebar = ({ name, navLinks }: any) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w="full" align="center">
        <Heading
          fontSize="xl"
          onClick={() => {
            router.push("/");
          }}
          cursor="pointer"
        >
          {name}
        </Heading>
        <Spacer />
        <IconButton
          aria-label="Search database"
          variant="ghost"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{name}</DrawerHeader>

            <DrawerBody>
              <DesktopSidebarContents name={name} navLinks={navLinks} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

interface SidebarProps {
  name: string;
  navLinks: string[];
}

const Sidebar = ({ name, navLinks }: SidebarProps) => {
  return (
    <chakra.header id="header">
      <Box display={{ base: "flex", md: "none" }} p={4}>
        <MobileSidebar name={name} />
      </Box>

      <Box display={{ base: "none", md: "flex" }}>
        <DesktopSidebarContents name={name} navLinks={navLinks} />
      </Box>
    </chakra.header>
  );
};

interface HeaderProps {
  name: string;
  navLinks: string[];
}

const Header = ({ name, navLinks }: HeaderProps) => {
  return (
    <Box>
      <Sidebar name={name} navLinks={navLinks} />
    </Box>
  );
};

export default Header;
