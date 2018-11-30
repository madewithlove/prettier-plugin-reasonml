module.exports = function genericPrint(path) {
  const node = path.getValue();

  return node.ast_type === "refmt" ? node.body : node.source;
};
