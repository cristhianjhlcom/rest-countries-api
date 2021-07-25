const API_URL = "https://restcountries.eu/rest/v2";

export async function getCountries () {
  try {
    const res = await fetch(`${API_URL}/all`);
    if(res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}