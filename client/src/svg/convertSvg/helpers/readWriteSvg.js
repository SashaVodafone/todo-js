import fs from "fs/promises";
import convertSvg from "../convertSvg.js";
import { renameFile } from "./renameFile.js";

const dir = process.cwd();

async function readWriteSvg() {
  const filePaths = await fs.readdir(`${dir}/client/src/assets`);
  let index = 0;

  for await (const filePath of filePaths) {
    const cleanFileName = renameFile(filePath);
    let data;
    index++;
    try {
      data = await fs.readFile(`${dir}/client/src/assets/${filePath}`, {
        encoding: "utf-8",
      });
      console.log(`${index} Read! ${cleanFileName} has been read`);
    } catch (err) {
      console.error(err);
      return;
    }
    const converted = convertSvg(data);
    const convertedString = JSON.stringify(converted, null, "  ")
      .replace(/\\"/g, "`")
      .replace(/"/g, "");

    try {
      await fs.writeFile(
        `${dir}/client/src/svg/convertSvg/converted.js`,
        `export const ${cleanFileName} = ${convertedString}\n\n`,
        {
          flag: "a",
        },
      );
      console.log(
        `${index} Saved! ${cleanFileName} has been converted and saved to converted.js`,
      );
    } catch (err) {
      console.log(`Error writing file`, filePath);
      console.error(err);
      return;
    }
  }
}

readWriteSvg();
