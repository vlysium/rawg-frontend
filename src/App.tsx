import { Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const handleSelectGenre = (genre: Genre) => {
    if (gameQuery.genre?.id === genre.id) {
      setGameQuery({ ...gameQuery, genre: null });
      return;
    }

    setGameQuery({ ...gameQuery, genre });
  }

  const handleSelectPlatform = (platform: Platform) => {
    if (gameQuery.platform?.id === platform.id) {
      setGameQuery({ ...gameQuery, platform: null });
      return;
    }

    setGameQuery({ ...gameQuery, platform });
  }

  const handleSelectSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder })
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "240px 1fr",
      }}
    >
      <GridItem gridArea={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem gridArea={"aside"} pt={4} display={{ base: "none", lg: "block" }}>
        <GenreList
          onSelectedGenre={handleSelectGenre}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>
      <GridItem gridArea={"main"} p={4}>
        <HStack spacing={4}>
          <PlatformSelector
            onSelectedPlatform={handleSelectPlatform}
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector 
            onSelectSortOrder={handleSelectSortOrder}
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid >
  );
}

export default App;
