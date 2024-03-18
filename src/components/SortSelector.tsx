import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({sortOrder, onSelectSortOrder}: Props) => {
  const sortOrders = [
    { name: "Relevance", value: "" }, // default
    { name: "Release date", value: "-released" },
    { name: "Average rating", value: "-rating" },
    { name: "Date added", value: "-added" },
    { name: "Popularity", value: "-metacritic" },
    { name: "Name", value: "name" },
  ];

  const selectedSortOrder = sortOrders.find((order) => order.value === sortOrder)?.name || "Relevance";

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Order by: ${selectedSortOrder}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            backgroundColor={sortOrder === order.value ? "gray.600" : "transparent"}
            _hover={{ backgroundColor: "gray.600" }}
            key={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >{order.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector