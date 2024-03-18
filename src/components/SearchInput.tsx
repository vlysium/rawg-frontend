import { InputGroup, InputLeftElement, Input, Box } from "@chakra-ui/react"
import { useRef } from "react";
import { BsSearch } from "react-icons/bs"

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(ref.current?.value || "")
  }

  return (
    <Box as="form" onSubmit={handleSubmit} marginLeft={{ base: 0, lg: 40 }} width="full">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input ref={ref} borderRadius="full" type="text" placeholder="Search games" variant="filled" />
      </InputGroup>
    </Box>
  )
}
export default SearchInput