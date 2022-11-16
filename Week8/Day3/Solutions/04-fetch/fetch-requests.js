f; /*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here

fetch("/products")
  .then((res) => {
    console.log(res);
    console.log("response status ", res.status);
    return res.text();
  })
  .then((data) => {
    console.log("response text after .then ", data);
  });

const getProducts = async () => {
  const response = await fetch("/products");

  console.log("response ", response);

  console.log("response ok? ", response.ok);

  if (response.ok) {
    console.log("response status ", response.status);
    console.log("response headers ", response.headers.get("Content-Type"));

    // promise pending
    // console.log("response text ", response.text());

    // promise fulfilled
    const data = await response.text();
    console.log("response data ", data);
  }
  // error handle if !response.ok
};

getProducts();

fetch("/products")
  .then(async (response) => {
    console.log("response ", response);

    console.log("response status ", response.status);
    console.log("response ok? ", response.ok);
    console.log("response headers ", response.headers.get("Content-Type"));

    //   console.log("response text ", response.text());
    // response.text().then(console.log);
    // console.log('await version text ', await response.text())
  })
  .then((responseData) => console.log("response text ", responseData));

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here

/* =================== 3. Print the Content-Type Header =================== */

// Your code here

/* ============== 4. Print the body of the response as text =============== */

// Your code here
