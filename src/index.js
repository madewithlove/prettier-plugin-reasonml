const languages = [
    {
        name: "ReasonML",
        parsers: ["reasonml"],
        extensions: [".re"],
    },
];

const parsers = {
    reasonml: {
        parse: require("./parse"),
        astFormat: "refmt",
        locStart(node) {
            return node.start;
        },
        locEnd(node) {
            return node.end;
        },
    },
};

const printers = {
    refmt: {
        print: require("./print"),
    },
};

module.exports = {
    languages,
    printers,
    parsers,
};
