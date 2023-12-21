const addTabletoSlide =()=> {
    // Define slide layout
  

    // Define table data
    var tableData = [
      ["Header 1", "Header 2", "Header 3"],
      [1, "Data A", "Info X"],
      [2, "Data B", "Info Y"],
      [3, "Data C", "Info Z"]
    ];

    // Define table formatting
    var tableOpts = {
      x: 1,
      y: 1,
      w: 6,
      h: 3,
      autoPage: true,
      fill: "F2F2F2", // Light gray background color
      color: "333333", // Dark text color
      fontSize: 12,
      align: "center",
      valign: "middle",
      border: { pt: 1, color: "000000" },
      row: {
        fill: "D9D9D9", // Lighter gray row background color
        color: "000000", // Black text color for rows
        bold: true
      },
      col: {
        fill: "FFC0CB", // Blue column background color
        color: "000000", // Black text color for columns
        align: "center" // Center-align column text
      }
    };

    // Add the table to the slide

     return {tableData, tableOpts};
   
  }

  export default addTabletoSlide;

