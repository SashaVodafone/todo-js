import fs from "fs/promises";
import convertSvg from "./convertSvg.js";

const dir = process.cwd();

const filePaths = [
  "icon-bin.svg",
  "icon-check.svg",
  "icon-close.svg",
  // "icon-down.svg",
];

filePaths.forEach(async filePath => {
  let data;
  try {
    data = await fs.readFile(`${dir}/src/assets/${filePath}`, {
      encoding: "utf-8",
    });
    console.log(`File ${filePath} has been read`);
  } catch (err) {
    console.error(err);
    return;
  }

  // const converted = convertSvg(JSON.stringify(data));
  const converted = convertSvg(data);
  // console.log(converted);
  // console.log(JSON.stringify(converted));
  // console.log(data);
  // console.log("File converted", filePath);

  // console.log(converted);
  const convertedString = JSON.stringify(converted);
  // console.log(`"${convertedString}"`);
  // console.log(convertedString);
  try {
    await fs.writeFile(`${dir}/src/svg/converted.js`, `'${convertedString}'`, {
      flag: "a",
    });
    console.log(
      `File ${filePath} has been converted and saved to converted.js`,
    );
  } catch (err) {
    console.log("Error writing file", filePath);
    console.error(err);
    return;
  }
});
