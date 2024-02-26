import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
      <Show above="lg">
        <GridItem gridArea={"aside"} pt={4}>
          <GenreList
            onSelectedGenre={handleSelectGenre}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem gridArea={"main"} p={4}>
        <PlatformSelector
          onSelectedPlatform={handleSelectPlatform}
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid >
  );
}

export default App;
