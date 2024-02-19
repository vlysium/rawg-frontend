import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppendImageUrl from "../services/image-crop";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppendImageUrl(genre.image_background)}
                alt={genre.name}
                borderRadius={8}
                boxSize="30px"
                objectFit="cover"
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
