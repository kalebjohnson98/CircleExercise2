
function buildCircle(radius) {
    //create a div that will become the circle
    let circle = document.createElement('div');
    function calcArea(radius) {
        let area = radius*radius*Math.PI;
        return area;
    }
    //give the circle an id so previously written css will take effect
    circle.setAttribute('id', 'circle');

    //set height and width of circle
    circle.style.height = `${radius*2}px`;
    circle.style.width = `${radius*2}px`;
    circle.style.borderWidth = `-5px`;
    circle.style.borderColor = `#000`;
    circle.style.borderStyle = `solid`;

    //target space you want to put the circle
    let drawSpace = document.getElementById('drawSpace');
    //append circle to target space
    drawSpace.appendChild(circle);
}

let submit = document.getElementById("add");
submit.addEventListener("click", () => {
    let radiusInput = document.getElementById('radius');
    buildCircle(radiusInput.value);
    radiusInput.value = "";
});
// function displayRadius(radius, area) {
//     let box = document.createElement('div');
//     let text = document.createElement('p');
//     text.appendChild(box);
//     text.textContent = (`Your radius is ${radius} and your area is ${area}.`);
// }


