const languages = [
  {
    name: "ReasonML",
    parsers: ["reasonml"],
    extensions: [".re"],
    aceMode: "text",
    linguistLanguageId: 869538413,
    vscodeLanguageIds: ["reason"]
  }
];

const parsers = {
  reasonml: {
    parse: require("./parse"),
    astFormat: "refmt"
  }
};

const printers = {
  refmt: {
    print: require("./print")
  }
};

module.exports = {
  languages,
  printers,
  parsers
};
