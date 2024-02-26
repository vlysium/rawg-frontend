import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            backgroundColor={selectedPlatform?.id === platform.id ? "gray.600" : "transparent"}
            _hover={{ backgroundColor: "gray.600" }}
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
          >{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
export default PlatformSelector