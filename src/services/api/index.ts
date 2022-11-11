const apiUrl = "https://rickandmortyapi.com/api";

export const callApi = async <Type extends unknown>(
  path: string
): Promise<Type> => {
  const response = await fetch(`${apiUrl}/${path}`);

  return response.json();
};
