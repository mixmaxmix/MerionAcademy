document
  .querySelectorAll(".accordeon .wrap-toggle")
  .forEach((toggle) => addToWrapListener(toggle));

document
  .querySelectorAll(".accordeon .tab-header .title")
  .forEach((toggle) => addToWrapListener(toggle));

function addToWrapListener(toggle) {
  toggle.addEventListener("click", () => {
    const tab = toggle.parentElement.parentElement;

    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
    } else {
      tab.classList.add("active");
    }
  });
}
