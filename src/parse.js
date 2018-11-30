const { sync } = require("execa");

const format = (text, options) =>
    sync("refmt", ["--print-width=" + options.printWidth], {
        input: text,
        preferLocal: true,
        localDir: __dirname,
        stripEof: false
    }).stdout;

const parse = (text, parsers, opts) => ({
    ast_type: "refmt",
    body: format(text, opts),
    end: text.length,
    source: text,
    start: 0
});

module.exports = parse;
