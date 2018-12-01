const languages = [
    {
        name: "ReasonML",
        parsers: ["reason"],
        extensions: [".re"],
        aceMode: "text",
        linguistLanguageId: 869538413,
        vscodeLanguageIds: ["reason"]
    }
];

const parsers = {
    reason: {
        parse: require("./parse"),
        astFormat: "refmt"
    },
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
