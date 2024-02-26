import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const handleSelectGenre = (genre: Genre) => {
    if (selectedGenre?.id === genre.id) {
      setSelectedGenre(null);
      return;
    }

    setSelectedGenre(genre);
  }

  const handleSelectPlatform = (platform: Platform) => {
    if (selectedPlatform?.id === platform.id) {
      setSelectedPlatform(null);
      return;
    }

    setSelectedPlatform(platform);
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
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem gridArea={"main"} p={4}>
        <PlatformSelector
          onSelectedPlatform={handleSelectPlatform}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid >
  );
}

export default App;
