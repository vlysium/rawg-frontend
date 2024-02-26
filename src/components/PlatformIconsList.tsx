import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
//import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  // const iconMap: { [key: string]: IconType } = {
  //   pc: FaWindows,
  //   playstation: FaPlaystation,
  //   xbox: FaXbox,
  //   mac: FaApple,
  //   linux: FaLinux,
  // };

  const getIcon = (slug: string) => {
    switch (slug) {
      case "pc":
        return FaWindows;
      case "playstation":
        return FaPlaystation;
      case "xbox":
        return FaXbox;
      case "mac":
        return FaApple;
      case "linux":
        return FaLinux;
      case "android":
        return FaAndroid;
      case "ios":
        return MdPhoneIphone;
      case "nintendo":
        return SiNintendo;
      default:
        return BsGlobe;
    }
  };

  return (
    <HStack m={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={getIcon(platform.slug)} />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
