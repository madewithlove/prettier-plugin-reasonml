const { format } = require("./utils");

module.exports = function parse(text, parsers, opts) {
    return {
        ast_type: "refmt",
        body: format(text),
        end: text.length,
        source: text,
        start: 0
    };
};
