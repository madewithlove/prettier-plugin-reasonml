const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

const fixturesDirName = path.resolve(__dirname, "fixtures");
const files = fs.readdirSync(fixturesDirName);

files.forEach(sourceFileName => {
    test(`formats fixture ${sourceFileName}`, () => {
        if (sourceFileName.includes("after")) {
            return;
        }

        const sourceFilePath = path.resolve(fixturesDirName, sourceFileName);
        const formattedFilePath = path.resolve(
            fixturesDirName,
            sourceFileName.replace("before", "after")
        );

        const sourceText = fs.readFileSync(sourceFilePath, "utf8");
        const expectedFormattedText = fs.readFileSync(
            formattedFilePath,
            "utf8"
        );

        let actualResult;
        try {
            actualResult = prettier.format(sourceText, {
                filepath: sourceFilePath,
                plugins: [path.resolve(__dirname, "..")]
            });
        } catch (e) {
            actualResult = sourceText;
        }

        expect(actualResult).toBe(expectedFormattedText);
    });
});
