module.exports = function print(path) {
    const node = path.getValue();

    return node.ast_type === "refmt" ? node.body : node.source;
};
