import "./App.css";
import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

function App() {
  const onClick = () => {
    axios({
      url: "/api/search",
      method: "post",
      data: {
        search: "search",
      },
    });
  };
  return (
    <div className="App">
      <div>Main page</div>
      <button onClick={onClick}>클릭</button>
    </div>
  );
}

export default App;
