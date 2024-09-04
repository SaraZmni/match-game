import { useEffect, useState } from "react";
import _ from "lodash";
import classNames from "classnames";

const Game = ({ data }) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(function onMount() {
    const allOptions = Object.entries(data).flat();
    setOptions(_.shuffle(allOptions));
  }, []);

  const handleSelection = (e) => {
    const { target } = e;
    const value = target.getAttribute("data-value");
    const newSelection = selectedOptions.concat(value);

    if (newSelection.length === 2) {
      const [first, second] = newSelection;

      if (data[first] == second || data[second] == first) {
      } else {
        setSelectedOptions(newSelection);
        setTimeout(function reset() {
          setSelectedOptions([]);
        }, 1000);
      }
    } else {
      setSelectedOptions(newSelection);
    }
  };
  return (
    <div className="game-board">
      {options.map((option) => {
        const isSelected = selectedOptions.includes(option);
        const isIncorrect = selectedOptions.length === 2 && isSelected;
        return (
          <button
            key={option}
            className={classNames(
              "option",
              isSelected && "selected",
              isIncorrect && "incorrect"
            )}
            onClick={handleSelection}
            data-value={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
export default Game;
