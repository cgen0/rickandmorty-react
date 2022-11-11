import { CharacterComplete, Response } from "../../types/types";
import { getCharacters } from "../getCharacters";
import { getLocations } from "../getLocation";
import { getEpisodes } from "../getEpisodes";
import { getIndexFromUrl } from "../../utils/getIndexFromUrl";

export const getCharactersComplete = async (
  page = 1
): Promise<Response<CharacterComplete>> => {
  const { info, results } = await getCharacters(page);
  const locationIds = Array.from(
    new Set(
      results
        .map((character) => getIndexFromUrl(character.origin.url))
        .concat(
          results.map((character) => getIndexFromUrl(character.location.url))
        )
    )
  );

  const episodeIds = Array.from(
    new Set(
      results.map((character) => character.episode.map(getIndexFromUrl)).flat()
    )
  );

  const characters = results.map(
    ({ episode, location, origin, ...character }) => ({
      ...character,
      episode: Array.from(new Set(episode.map(getIndexFromUrl))),
      location: getIndexFromUrl(location.url),
      origin: getIndexFromUrl(origin.url),
    })
  );

  const fetchedEpisodes = await getEpisodes(episodeIds);
  const fetchedLocations = await getLocations(locationIds);

  return {
    info,
    results: characters.map(({ episode, location, origin, ...character }) => ({
      ...character,
      episode: episode.map(
        (episode) => fetchedEpisodes.find(({ id }) => id === episode)!
      ),
      location: fetchedLocations.find(({ id }) => id === location)!,
      origin: fetchedLocations.find(({ id }) => id === origin)!,
    })),
  };
};
