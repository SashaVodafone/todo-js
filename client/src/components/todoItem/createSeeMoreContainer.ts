function createSeeMoreContainer(id: string, description?: string) {
  // create see more container
  const seeMoreContainer = document.createElement("div");
  seeMoreContainer.id = `see-more-container-${id}`;
  seeMoreContainer.classList.add("see-more-container");
  seeMoreContainer.classList.add("hidden");
  const seeMoreText = document.createElement("p");
  seeMoreText.textContent = description ?? "";
  seeMoreContainer.appendChild(seeMoreText);
  return seeMoreContainer;
}

export default createSeeMoreContainer;
