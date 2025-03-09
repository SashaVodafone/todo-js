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
    group.paths?.forEach(path => {
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
      svg.appendChild(pathElement);
    });

    const groupElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g",
    );
    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    if (group.d) {
      groupElement.setAttribute("d", group.d);
    }
    if (group.display) {
      groupElement.setAttribute("display", group.display);
    }
    if (group.fillRule) {
      groupElement.setAttribute("fill-rule", group.fillRule);
    }
    if (group.clipRule) {
      groupElement.setAttribute("clip-rule", group.clipRule);
    }
    svg.appendChild(groupElement).appendChild(pathElement);
  });

  return svg;
}

export default createSvg;
