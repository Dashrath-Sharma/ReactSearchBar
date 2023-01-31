import { useState } from "react";
import Input from "./components/input";
import data from "./components/data";
import "./styles.css";

const App = () => {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const filterData = (val) => {
    if (!val) return [];
    const RegE = new RegExp(val, "gi");
    let filtered = data.filter((d) => RegE.test(d));
    return filtered;
  };
  const handleValue = (e) => {
    const val = e.target.value;
    setValue(val);
    setFilteredData(filterData(val));
  };
  return (
    <div className="App">
      <h2>Search a coding Platform</h2>
      <Input value={value} filteredData={filteredData} onChange={handleValue} />
    </div>
  );
};

export default App;
