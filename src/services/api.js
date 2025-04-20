import { apiClient } from "./unsplash";


export const searchImages = async (query) => {
  try {

    const response = await apiClient.get("/search/photos", {
      params: { query, per_page: 16 },
    });

    if (response.status !== 200) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.data.results;
  }catch(err){
    return { error: err};
  }
};

export const randomImages = async (count = 12) => {
  try {
    const response = await apiClient.get("/photos/random", {
      params: { count },
    });
    if (response.status !== 200) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.data;
  } catch (err) {
    console.error("Error fetching images:", err.message);
    return { error: err };
  }
};
