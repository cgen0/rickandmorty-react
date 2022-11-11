import { Location } from "../../types/types";
import { callApi } from "../api";

export const getLocations = async (
  locations: number[]
): Promise<Location[]> => {
  const response = await callApi<Location | Location[]>(
    `location/${locations.join(",")}`
  );

  return Array.isArray(response) ? response : [response];
};
