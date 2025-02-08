import createSvg from "../../svg/createSvg.ts";
import { iconDown } from "../../svg/icons.ts";

function createSeeMoreButton(id: string) {
  // console.log("Creating see more", id);
  // create button
  const seeMoreButton = document.createElement("button");
  seeMoreButton.id = `see-more-button-${id}`;
  seeMoreButton.classList.add("svg-button");
  // add svg
  const iconDownSvg = createSvg(iconDown);
  iconDownSvg.classList.add("svg-icon");
  iconDownSvg.classList.add("see-more");
  seeMoreButton.appendChild(iconDownSvg);
  // add on click function

  // return button
  return seeMoreButton;
}

export default createSeeMoreButton;
