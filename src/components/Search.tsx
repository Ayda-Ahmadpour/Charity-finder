// ProductList.js
import { useState } from "react";
import "./ProductList.css";
import jsonData from "../../CausesList.json";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const filteredCauses = jsonData.causes.filter((cause) =>
    cause.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setSearchTerm(item); // Update the search term to display the selected item in the input
  };
  return (
    <>
      <div
        className="search-bar"
        style={{ display: "flex", alignItems: "center" }}
      >
        <input
          type="text"
          placeholder="Search by cause"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span
          style={{
            backgroundColor: "red",
            color: "white",
            textAlign: "center",
            padding: "10px",
          }}
        >
          Search
        </span>
      </div>
      {searchTerm && (
        <div className="cause-list">
          {filteredCauses.map((cause) => (
            <div
              key={cause}
              className={`cause-item ${
                selectedItem === cause ? "selected" : ""
              }`}
              onClick={() => handleItemClick(cause)}
            >
              {cause}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
