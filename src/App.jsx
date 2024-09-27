import { useCallback, useEffect, useState } from "react";
import { PerRow } from "./Component/PerRow";
import "./generalStyle.css";
import _ from "lodash";

export const App = () => {
  const createDataArray = (row, column) => {
    let dataArr = []

    for (let i = 0; i < row; i++) {
      dataArr.push([])

      for (let j = 0; j < column; j++) {
        dataArr[i].push(0)
      }
    }

    return dataArr
  }

  const heightVal = 100;
  const widthVal = 200;

  const [dataArr, setDataArr] = useState([])

  useEffect(() => {
    setDataArr(createDataArray(heightVal, widthVal))
  }, [])

  const updateCell = useCallback((prevX, prevY, e) => {
    setDataArr((prevClickedCells) => {
      let copiedClickedCells = _.cloneDeep(prevClickedCells)

      if (prevY + 1 !== heightVal && copiedClickedCells[prevY + 1][prevX] === 0) {
        copiedClickedCells[prevY][prevX] = 0
        copiedClickedCells[prevY + 1][prevX] = 1

        setTimeout(() => {
          updateCell(prevX, prevY + 1)
        }, 7)

        return copiedClickedCells
      } else if (prevY + 1 < heightVal) {
        if (copiedClickedCells[prevY + 1][prevX - 1] === 0) {
          copiedClickedCells[prevY][prevX] = 0

          copiedClickedCells[prevY + 1][prevX - 1] = 1

          setTimeout(() => {
            updateCell(prevX, prevY + 1)
          }, 7)

          return copiedClickedCells
        } else if (copiedClickedCells[prevY + 1][prevX + 1] === 0) {
          copiedClickedCells[prevY][prevX] = 0

          copiedClickedCells[prevY + 1][prevX + 1] = 1

          setTimeout(() => {
            updateCell(prevX, prevY + 1)
          }, 7)

          return copiedClickedCells
        }
        return copiedClickedCells
      } else {
        return copiedClickedCells
      }
    }, []);
  }, []);

  const cellOnClick = (x, y, e) => {
    setDataArr((prevClickedCells) => {
      let newClickedCells = _.cloneDeep(prevClickedCells)

      newClickedCells[y][x] = 1

      return newClickedCells
    });

    setTimeout(() => {
      updateCell(x, y, e);
    }, 7);
  };

  return (
    <div className="App">
      {dataArr.map((y, i) => (
        <div key={i}>
          <PerRow key={i} currentRow={dataArr[i]} dataArr={dataArr} widthVal={widthVal} heightVal={heightVal} cellOnClick={cellOnClick} y={i} />
        </div>
      ))}
    </div>
  );
}

export default App;
