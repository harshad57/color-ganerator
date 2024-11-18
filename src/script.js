let change = document.querySelector("#change");

let getcolor = () => {
    let newElements = document.querySelectorAll(".color");
    let colorElements = document.querySelectorAll(".name");

    if (change.innerHTML == "Generate Colors") {
        change.innerHTML = "Change Colors";
    }

    newElements.forEach((newElement, index) => {
        let randomcolor = Math.floor(Math.random() * 0xffffff).toString(16);
        randomcolor = "#" + ("000000" + randomcolor).slice(-6);
        newElement.style.backgroundColor = randomcolor;
        colorElements[index].innerHTML = randomcolor;
    });
};

change.addEventListener("click", getcolor);