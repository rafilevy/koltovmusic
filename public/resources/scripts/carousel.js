function initialiseCarousel() {
    let cellCount = document.getElementsByClassName("carousel-cell").length;
    let dotContainer = document.getElementsByClassName("carousel-dots").item(0);
    for (let i = 0; i<cellCount; i++) {
        dotContainer.innerHTML += "<svg><circle r='8' cx='10' cy='10' fill='white' stroke='black'/></svg>"
    }
    dotContainer.ATTRIBUTE_NODE.
    setActiveCell(0)
}

function setActiveCell(index) {
    let cells = document.getElementsByClassName("carousel-cell");
    if (index >= cells.length) throw new Error("The specified cell does not exist.");
    for (let i = 0; i<cells.length; i++) {
        cells.item(i).classList.remove("active");
    }
    setTimeout(()=> cells.item(index).classList.add("active"), 500);
}

initialiseCarousel()