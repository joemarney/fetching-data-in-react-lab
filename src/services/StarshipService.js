const BASE_URL = "https://swapi.dev/api/starships";

export const index = async () => {
  try {
    const request = await fetch(BASE_URL);
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const show = async (params) => {
  try {
    const request = await fetch(BASE_URL + "/?search=" + params);
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
