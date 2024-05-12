const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/seventeen-image1.jpg") {
    myImage.setAttribute("src", "images/seventeen-image2.jpg");
  } else {
    myImage.setAttribute("src", "images/seventeen-image1.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello baby CARAT, ${myName}`;
  }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello baby CARAT, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };