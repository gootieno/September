// Your code here
window.addEventListener("DOMContentLoaded", () => {
  //   alert("Dom Loaded");
  const addButton = document.getElementById("add");
  console.log("add button ", addButton);

  const shoppingList = document.getElementById("shopping-list");
  console.log("shopping list ul ", shoppingList);

  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    // alert("click event fired");
    const itemName = document.getElementById("name");

    const itemNameValue = document.getElementById("name").value;
    console.log("item name value", itemNameValue);

    const itemType = document.getElementById("type").value;

    console.log("item type ", itemType);

    const listItem = document.createElement("li");

    listItem.dataset.type = itemType;

    listItem.innerText = itemNameValue;
    console.log("list item ", listItem);

    shoppingList.appendChild(listItem);

    itemName.value = "";
  });
});
