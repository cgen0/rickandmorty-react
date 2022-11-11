import { Character, Response } from "../../types/types";

import { callApi } from "../api";

export const getCharacters = async (
  page: Number
): Promise<Response<Character>> => {
  const { info, results } = await callApi<Response<Character>>(
    `character?page=${page}`
  );

  const characters = results;

  return {
    info,
    results: characters,
  };
};
