import { useState } from "react";

interface FilterButtonsProps {
  setFilter: (index: number) => void;
}

const FilterButtons = ({ setFilter }: FilterButtonsProps) => {
  const [clickedIndex, setClickedIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setClickedIndex(index);
    setFilter(index);
  };

  return (
    <span id="filter-buttons-container">
      <button
        onClick={() => handleClick(0)}
        className={`filter-button${
          clickedIndex === 0 ? " clicked text-preset-4" : " text-preset-3"
        }`}
      >
        All
      </button>
      <button
        onClick={() => handleClick(1)}
        className={`filter-button${
          clickedIndex === 1 ? " clicked text-preset-4" : " text-preset-3"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => handleClick(2)}
        className={`filter-button${
          clickedIndex === 2 ? " clicked text-preset-4" : " text-preset-3"
        }`}
      >
        Inactive
      </button>
    </span>
  );
};

export default FilterButtons;
