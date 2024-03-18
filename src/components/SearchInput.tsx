import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"

const SearchInput = () => {
  return (
    <InputGroup
      as="form"
      onSubmit={(event) => event.preventDefault()}
      marginLeft={{ base: 0, lg: 40}}
    >
      <InputLeftElement pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input borderRadius="full" type="text" placeholder="Search" />
    </InputGroup>
  )
}
export default SearchInput