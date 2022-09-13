import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const onClick = (e) => {
    e.preventDefault();
    alert(search);
  };
  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <div>Main page</div>
      <form onSubmit={(e) => onClick(e)}>
        <input onChange={onChangeSearch} value={search} />
        <button type="submit">검색</button>
      </form>
    </div>
  );
}

export default App;
