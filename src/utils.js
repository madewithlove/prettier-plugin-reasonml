const refmt = require("reason");

module.exports = {
    format: text => refmt.printRE(refmt.parseRE(text)),
};
