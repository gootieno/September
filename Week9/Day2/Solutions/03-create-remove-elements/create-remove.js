/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        console.log(url);
        const urlData = url.split('/');
        console.log(urlData);
        const breed = urlData[4];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const li = document.createElement('li');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        // img.setAttribute('src', url);
        img.src = url;
        const figCaption = document.createElement('figcaption');
        figCaption.innerText = breed;

        figure.append(img, figCaption);
        li.appendChild(figure);
        const ul = document.querySelector('ul');
        ul.appendChild(li);
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDog = document.querySelector('li');

    if (firstDog) {
        firstDog.remove();
    } else {
        console.log("No dog to remove");
    }
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const allDogs = document.querySelectorAll('li');
    let lastDog;
    if (allDogs.length > 0) {
        lastDog = allDogs[allDogs.length - 1];
    }

    if (lastDog) {
        lastDog.remove();
    } else {
        console.log('No dog to remove');
    }
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
