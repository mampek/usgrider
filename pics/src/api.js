import axios from "axios";
// prettier-ignore
const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Clien-ID d1Ytr571dI_gk65CgbQAGwkRjdk65s5ryQzg6nKSC_I',
    },
    params: {
      query: 'cars',
    },
  });
  console.log(response);
  return response;
};
export default searchImages;
