import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" mx={4} my={2}>
        <Image src={logo} boxSize="60px"></Image>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
