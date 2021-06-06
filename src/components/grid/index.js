import React, { useState, useMemo } from "react";
import { generateArrayFromNumber, isNumberMultiple } from "../../utils/arrays";
import "./grid.styles.css";

const MAX_NUMBER_TO_RENDER = 144;

const Grid = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const multiplicationItems = useMemo(() => {
    return generateArrayFromNumber(MAX_NUMBER_TO_RENDER);
  }, []);

  const handleSelectedValue = (newValue) => {
    if (newValue === selectedValue) setSelectedValue(null);
    else setSelectedValue(newValue);
  };

  return (
    <div className="grid">
      {multiplicationItems.map((mulItem) => (
        <div
          key={"grid-multiplication-item" + mulItem}
          className={`multiplication-item ${
            isNumberMultiple(selectedValue, mulItem)
              ? "highlighted-multiplication-item"
              : ""
          } ${
            typeof selectedValue === "number" && selectedValue == mulItem
              ? "selected-multiplication-item"
              : ""
          }`}
          onClick={() => handleSelectedValue(mulItem)}
        >
          {mulItem}
        </div>
      ))}
    </div>
  );
};

export default Grid;
