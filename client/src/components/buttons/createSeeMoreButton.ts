import createSvg from "../../svg/createSvg.ts";
import { iconDown } from "../../svg/icons";

function createSeeMoreButton(id: string) {
  const seeMoreButton = document.createElement("button");
  seeMoreButton.id = `see-more-button-${id}`;
  seeMoreButton.classList.add("svg-button");

  const iconDownSvg = createSvg(iconDown);
  iconDownSvg.classList.add("svg-icon");
  iconDownSvg.classList.add("see-more-button");
  seeMoreButton.appendChild(iconDownSvg);

  seeMoreButton.onclick = () => {
    const seeMoreContainer = document.getElementById(
      `see-more-container-${id}`,
    );
    seeMoreContainer?.classList.toggle("hidden");
  };

  return seeMoreButton;
}

export default createSeeMoreButton;
