function convertTableToJSON(table) {
  var header = [];
  var rows = [];

  for (var i = 0; i < table.rows[0].cells.length; i++) {
    header.push(table.rows[0].cells[i].innerHTML);
  }

  for (var i = 1; i < table.rows.length; i++) {
    var row = {}, row2 = {}, row3 = {};
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      let elem =table.rows[i].cells[j].innerHTML;
      if(row[header[j]]){
        if(row2[header[j]]) row3[header[j]] = elem;
        else row2[header[j]] = elem;
      } else row[header[j]] = elem;
    }
    rows.push(row, row2, row3);
  }

  return rows;
}

const ANS_KEY = {
  1: "B",
  2: "A",
  3: "A",
  4: "A",
  5: "",
  6: "D",
  7: "C",
  8: "D",
  9: "B",
  10: "A",
  11: "A",
  12: "B",
  13: "D",
  14: "C",
  15: "",
  16: "A",
  17: "B",
  18: "",
  19: "C",
  20: "",
  21: "B",
  22: "B;C;D",
  23: "C;D",
  24: "B;C;D",
  25: "A;C",
  26: "B;C",
  27: "C;D",
  28: "B;D",
  29: "A;C",
  30: "",
  31: "",
  32: "0",
  33: "0",
  34: "",
  35: "7",
  36: "A",
  37: "",
  38: "",
  39: "C",
  40: "",
  41: "",
  42: "",
  43: "D",
  44: "",
  45: "",
  46: "B",
  47: "C",
  48: "",
  49: "B;C;D",
  50: "",
  51: "",
  52: "",
  53: "C;D",
  54: "",
  55: "A;B",
  56: "",
  57: "",
  58: "5",
  59: "8",
  60: "",
  61: "2",
  62: "7",
  63: "4",
  64: "9",
  65: "",
};

module.exports = {
  convertTableToJSON,
  ANS_KEY,
};