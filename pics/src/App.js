import SearchBar from "./components/SearchBar.js";

function App() {
  const handleSubmit = (term) => {
    console.log("Do a search with", term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
