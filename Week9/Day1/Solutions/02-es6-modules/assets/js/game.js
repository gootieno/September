import { getIndex } from "./utilities.js";
import { mrPotatoHeadQuotes } from "./quotes/mrPotatoHead.js";
// you can comma separate imports. Since you can only have one unnamed export
// you should not have more than one variable name without curlies. 
// more than one named export can be imported from the same file by comma separating within
// the curlies. 
import mrsPotatoHeadQuotes, { newObject } from "./quotes/mrsPotatoHead.js";

export default class Game {
  start() {
    document.getElementById("hello").addEventListener("click", () => {
      console.log("new object", newObject);
      const index = getIndex();
      const messageContainer = document.getElementById("message");
      if (index === 1) {
        messageContainer.innerText = mrPotatoHeadQuotes["hello"];
      } else {
        messageContainer.innerText = mrsPotatoHeadQuotes["hello"];
      }
    });

    document.getElementById("bye").addEventListener("click", () => {
      const index = getIndex();
      const messageContainer = document.getElementById("message");
      if (index === 1) {
        messageContainer.innerText = mrPotatoHeadQuotes["bye"];
      } else {
        messageContainer.innerText = mrsPotatoHeadQuotes["bye"];
      }
    });

    document.getElementById("swap").addEventListener("click", () => {
      const index = getIndex();
      const image = document.getElementById("image");
      const messageContainer = document.getElementById("message");
      const wrapper = document.getElementById("wrapper");
      if (index === 1) {
        image.src = "./assets/images/potatohead2.png";
        wrapper.dataset.index = "2";
      } else {
        image.src = "./assets/images/potatohead1.png";
        wrapper.dataset.index = "1";
      }
      messageContainer.innerText = "";
    });
  }
}
