import { Episode } from "../../types/types";
import { callApi } from "../api";

export const getEpisodes = async (episodes: number[]): Promise<Episode[]> => {
  const response = await callApi<Episode | Episode[]>(
    `location/${episodes.join(",")}`
  );

  return Array.isArray(response) ? response : [response];
};
