import axios from "axios";
// prettier-ignore
const searchImages = async (term) => {
  const response = await axios.get(
    'https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID d1Ytr571dI_gk65CgbQAGwkRjdk65s5ryQzg6nKSC_I',
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
export default searchImages;
