export function renameFile(filePath) {
  const cleanFileName = filePath.split(".")[0].replace(/[0-9]/g, "");

  const nameSegments = cleanFileName.split("-");
  const capitalisedWords = nameSegments.map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalisedWords.join("");
}
