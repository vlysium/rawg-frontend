import { HStack, Image, List, ListItem, Text, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppendImageUrl from "../services/image-crop";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <>
      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack as="button"
              onClick={() => onSelectedGenre(genre)}
              py="5px"
              pl={6}
              width="100%"
              bgColor={selectedGenre?.id === genre.id ? "gray.700" : "transparent"}
              roundedRight={8}
            >
              <Image
                src={getCroppendImageUrl(genre.image_background)}
                alt={genre.name}
                borderRadius={8}
                boxSize="30px"
                objectFit="cover"
              />
              <Text
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              >{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
