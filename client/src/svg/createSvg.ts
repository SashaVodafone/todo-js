interface groupObject {
  d?: string;
  display?: string;
  fillRule?: string;
  clipRule?: string;
  strokeWidth?: number;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  paths?: pathObject[];
}

interface pathObject extends Omit<groupObject, "paths"> {}

interface svgProps {
  svgProperties: {
    width: string;
    height?: string;
    viewBox: string;
  };
  groups: groupObject[];
}

function createSvg(
  { svgProperties, groups }: svgProps,
  size?: { width?: string; height?: string },
) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const width = size?.width || svgProperties.width;
  const height = size?.height || svgProperties.height;
  svg.setAttribute("width", width);
  if (height) {
    svg.setAttribute("height", height);
  }
  svg.setAttribute("viewBox", svgProperties.viewBox);

  groups.forEach(group => {
    if (group.paths) {
      group.paths.forEach(path => {
        const pathElement = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path",
        );
        Object.keys(path).forEach(key => {
          const styleAttribute = key as keyof pathObject;
          const value = path[styleAttribute];
          if (typeof value !== "undefined") {
            pathElement.setAttribute(key, value.toString());
          }
        });
        // pathElement.setAttribute("d", path.d);
        // if (path.display) {
        //   pathElement.setAttribute("display", path.display);
        // }
        // if (path.fillRule) {
        //   pathElement.setAttribute("fill-rule", path.fillRule);
        // }
        // if (path.clipRule) {
        //   pathElement.setAttribute("clip-rule", path.clipRule);
        // }
        // if (path.stroke) {
        //   pathElement.setAttribute("stroke", path.stroke);
        // }
        // if (path.strokeWidth) {
        //   pathElement.setAttribute("stroke-width", path.strokeWidth);
        // }
        // if (path.strokeLinecap) {
        //   pathElement.setAttribute("stroke-linecap", path.strokeLinecap);
        // }
        // if (path.strokeLinejoin) {
        //   pathElement.setAttribute("stroke-linejoin", path.strokeLinejoin);
        // }
        svg.appendChild(pathElement);
      });
      return;
    }
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    pathElement.setAttribute("d", group.d);
    if (group.display) {
      pathElement.setAttribute("display", group.display);
    }
    if (group.fillRule) {
      pathElement.setAttribute("fill-rule", group.fillRule);
    }
    if (group.clipRule) {
      pathElement.setAttribute("clip-rule", group.clipRule);
    }
    svg.appendChild(g).appendChild(pathElement);
  });

  return svg;
}

export default createSvg;
