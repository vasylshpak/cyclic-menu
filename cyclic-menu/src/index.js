window.addEventListener("load", function () {
  const itemsList = {
    issues: "#",
    pull: "#",
    contact: "#",
    market: "#",
    explore: "#",
    github: "#",
    repositories: "#",
  };
  const HTML_DOM = window.document;
  HTML_DOM.addEventListener("keydown", toogleNav);
  const navElement = HTML_DOM.createElement("nav");
  let currentIndex = 0;
  const maxIndex = Object.keys(itemsList).length;
  createMenu();

  function createMenu() {
    const fragment = HTML_DOM.createDocumentFragment();
    const keysArray = Object.keys(itemsList);
    keysArray.forEach((el, index) => {
      const linkItem = HTML_DOM.createElement("a");
      linkItem.setAttribute("href", itemsList[el]);
      linkItem.classList.add("menu");
      linkItem.innerHTML = `${el.toUpperCase()}`;
      linkItem.id = `menuID-${index}`;
      fragment.appendChild(linkItem);
      if (index === 0) {
        linkItem.classList.add("active");
      }
    });
    document.body.appendChild(navElement);
    navElement.appendChild(fragment);
  }

  function toogleNav(event) {
    function changeActive(current, next) {
      current.classList.toggle("active");
      next.classList.toggle("active");
    }
    function decrIndex(currentIndex) {
      return (currentIndex - 1 + maxIndex) % maxIndex;
    }
    function incrIndex(currentIndex) {
      return (currentIndex + 1) % maxIndex;
    }
    const currentItem = window.document.getElementById(
      `menuID-${currentIndex}`
    );
    if (event.key === "ArrowLeft") {
      const selectedIndex = decrIndex(currentIndex);
      const nextItem = HTML_DOM.getElementById(`menuID-${selectedIndex}`);
      changeActive(currentItem, nextItem);
      currentIndex = selectedIndex;
    }
    if (event.key === "ArrowRight") {
      const selectedIndex = incrIndex(currentIndex);
      const nextItem = HTML_DOM.getElementById(`menuID-${selectedIndex}`);
      changeActive(currentItem, nextItem);
      currentIndex = selectedIndex;
    }
  }
});
