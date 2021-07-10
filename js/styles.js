function makeStyles() {
    makeCornedElements()
}

function makeCornedElements() {
    const boxes = Array.from(document.getElementsByClassName('corned'));
    boxes.forEach(box => {
        box.style.position = 'relative'
        box.innerHTML += makeCorners()
    })
}

function makeCorners() {
    let corners = ''
    corners += makeTopLeftCorner()
    corners += makeTopRightCorner()
    corners += makeBottomLeftCorner()
    corners += makeBottomRightCorner()
    return corners;
}

function makeTopLeftCorner() {
    return `
        <img 
            src="./styles/assets/yellowCorner.svg" 
            alt="corer"
            style="position: absolute; top: 0; left: 10%" 
        >
    `;
}

function makeTopRightCorner() {
    return `
        <img 
            src="./styles/assets/yellowCorner.svg" 
            alt="corer"
            style="position: absolute; top: 0; right: 10%; transform: rotate(90deg)" 
        >
    `;
}

function makeBottomLeftCorner() {
    return `
        <img 
            src="./styles/assets/yellowCorner.svg" 
            alt="corer"
            style="position: absolute; bottom: 0; left: 10%; transform: rotate(270deg)" 
        >
    `;
}

function makeBottomRightCorner() {
    return `
        <img 
            src="./styles/assets/yellowCorner.svg" 
            alt="corer"
            style="position: absolute; bottom: 0; right: 10%; transform: rotate(180deg)" 
        >
    `;
}
