import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <>
      <HStack justifyContent="space-between" mx={4} my={2} spacing={{base: 2, lg: 5}}>
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
      </HStack>
    </>
  );
};

export default NavBar;
