// Your code here
window.addEventListener("DOMContentLoaded", () => {
  // alert('Dom loaded!')

  const redInput = document.getElementById("red-input");
  console.log("red input element ", redInput);

  const changeRedInput = () => {
    const value = redInput.value;

    console.log("red input value ", value);

    if (value.includes("red")) redInput.style.backgroundColor = "red";
    else redInput.style.backgroundColor = "";
  };

  redInput.addEventListener("input", changeRedInput);

  /*
    When #add-item is pressed, a new <li> element 
    with the value from #list-add is created 
    and appended to the <ul>.
  */

  const addItemButton = document.getElementById("add-item");
  const listContainer = document.querySelector("#section-2 > ul");

  const shoppingList = () => {
    const listAddElement = document.getElementById("list-add");

    console.log("list add element ", listAddElement);

    const listAddElementValue = listAddElement.value;

    console.log("list add element value ", listAddElementValue);

    const listItem = document.createElement("li");
    listItem.innerText = listAddElementValue;

    console.log("list item ", listItem);

    listContainer.appendChild(listItem);

    listAddElement.value = "";
  };

  addItemButton.addEventListener("click", shoppingList);

  /*
    When a new color is selected in #color-select,
    change the background color of the <section> it belongs to.
  */
  const backgroundSection = document.getElementById("section-3");
  console.log("section 3 ", backgroundSection);

  const colorSelect = document.getElementById("color-select");

  const changeBackgroundColor = () => {
    const backgroundColorValue = colorSelect.value;
    backgroundSection.style.backgroundColor = backgroundColorValue;
  };

  colorSelect.addEventListener("change", changeBackgroundColor);

  const removeEventsButton = document.getElementById("remove-listeners");
  console.log("remove event button ", removeEventsButton);

  removeEventsButton.addEventListener("click", () => {
    redInput.removeEventListener("input", changeRedInput);
    addItemButton.removeEventListener("click", shoppingList);
    colorSelect.removeEventListener("change", changeBackgroundColor);
  });
});
