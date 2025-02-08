interface pathObject {
  d: string;
  display?: string;
  fillRule?: string;
  clipRule?: string;
}

interface svgProps {
  svgProperties: {
    width: string;
    height?: string;
    viewBox: string;
  };
  paths: pathObject[];
}

function createSvg(
  { svgProperties, paths }: svgProps,
  size: { width?: string; height?: string } = {},
) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", size.width || svgProperties.width);
  if (size.height) {
    svg.setAttribute("height", size.height);
  }
  if (!size.height && svgProperties.height) {
    svg.setAttribute("height", svgProperties.height);
  }
  svg.setAttribute("viewBox", svgProperties.viewBox);

  paths.forEach(path => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    pathElement.setAttribute("d", path.d);
    if (path.display) {
      pathElement.setAttribute("display", path.display);
    }
    if (path.fillRule) {
      pathElement.setAttribute("fill-rule", path.fillRule);
    }
    if (path.clipRule) {
      pathElement.setAttribute("clip-rule", path.clipRule);
    }
    svg.appendChild(g).appendChild(pathElement);
  });

  svg
    .appendChild(document.createElementNS("http://www.w3.org/2000/svg", "g"))
    .appendChild(
      document.createElementNS("http://www.w3.org/2000/svg", "path"),
    );

  return svg;
}

export default createSvg;
