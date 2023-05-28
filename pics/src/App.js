import { useState } from "react";
import SearchBar from "./components/SearchBar.js";
import ImageList from "./components/ImageList.js";
import searchImages from "./api.js";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
