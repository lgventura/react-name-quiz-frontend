import React from "react";

const TableWords = ({ wordsFound }) => {
  const tableRows = [0, 1, 2, 3, 4];

  const renderTable = () => {
    const tableSpace = [];

    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 10; col++) {
        const tableIndex = row * 10 + col;

        tableSpace.push(
          <td
            style={{
              backgroundColor: wordsFound[tableIndex] ? "#bfe890" : "#ffc107",
              width: "10%",
              height: 24,
              textAlign: "center",
            }}
            key={tableIndex}
          >
            {wordsFound[tableIndex] || ""}
          </td>
        );
      }
    }

    return tableSpace;
  };

  return (
    <table style={{ width: "100%" }}>
      <tbody>
        {tableRows.map((row) => (
          <tr key={row}>{renderTable().slice(row * 10, (row + 1) * 10)}</tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableWords;
