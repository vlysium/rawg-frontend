import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    "games", {
      params: {
        "genres": gameQuery.genre?.id,
        "parent_platforms": gameQuery.platform?.id
      }
    },
    [gameQuery.genre?.id, gameQuery.platform?.id]
  );
};

export default useGames;
